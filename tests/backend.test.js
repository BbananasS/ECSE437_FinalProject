import Todo from "../components/Todo"

const mongoose = require('mongoose');
require('dotenv').config();

describe('Todo CRUD',() => {
    let connection;
    let database;
    const todos = mongoose.model("test_"+process.env.COLLECTION,mongoose.Schema({
        title: String,
        completed: Boolean
    }));

    beforeAll(async () => {
       
        connection = await mongoose.connect('mongodb://localhost:27017/test_'+process.env.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true });
        db = mongoose.connection;
        const collection = process.env.COLLECTION;
        await db.createCollection(collection);

    });

    afterAll(async () => {

        const collection = "test_"+process.env.COLLECTION;
        await db.dropCollection(collection);
        await db.dropDatabase();
        await db.close();
        await connection.close();

    });

    
    test("Add Todo POST /todos",async () => {

        const response = await todos.create({
            title: process.env.TODO_TITLE,
            completed: process.env.TODO_COMPLETED
        });
        await response.save();
        expect(response.title).toBe(process.env.TODO_TITLE);

    });

    test("All Todos GET /todos", async () => {

        const response = await todos.find({});
        expect(response.length).toBeGreaterThan(0);

    });

    test("Update Todo PUT /todo/:id", async () => {
      
        const response = await todos.updateOne({title: process.env.TODO_TITLE_ALT},{completed: process.env.TODO_COMPLETED});
        expect(response.ok).toBeTruthy();

    });

    // test("Todo update is correct", async () => {

    //     const responseTwo = await todos.findOne({todo: process.env.TODO_TITLE});
    //     expect(responseTwo.email).toBe(process.env.CUSTOMER_EMAIL_ALT);

    // });

    test("Delete Todo DELETE /todos/:id", async() => {
        
        const response = await todos.deleteOne({name: process.env.TODO_TITLE});
        expect(response.ok).toBe(1);
      

    });

});
