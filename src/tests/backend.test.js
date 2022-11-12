global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;
const mongoose = require('mongoose');
require('dotenv').config();

var db;
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

    
    test("Add Todo POST /todos", async () => {

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

    test("Delete Todo DELETE /todos/:id", async() => {
        
        const response = await todos.deleteOne({name: process.env.TODO_TITLE});
        expect(response.ok).toBe(1);
      

    });

    // INTEGRATION TESTING //

    //POST & GET
    test("Add Todo POST /todos", async () => {

        const response = await todos.create({
            title: "123456789",
            completed: process.env.TODO_COMPLETED
        });

        const response2 = await todos.find({title: "123456789"});
        expect(response2.length).toBe(9);

    });

    //POST & GET
    test("Add Todo POST /todos", async () => {

        const response = await todos.create({
            title: "123456789",
            completed: process.env.TODO_COMPLETED
        });

        const response2 = await todos.find({title: "12345"});
        expect(response2.length).toBe(5);

    });
    
    //UPDATE & PUT & GET
    test("Add Todo POST /todos", async () => {

        const response = await todos.create({
            title: "123456789",
            completed: process.env.TODO_COMPLETED
        });

        const response2 = await todos.updateOne({title: "1234"},{completed: process.env.TODO_COMPLETED});
        expect(response.ok).toBeTruthy();

        const response3 = await todos.find({title: "1234"});
        expect(response2.length).toBe(4);

    });

});

//
