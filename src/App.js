import React, { useState, useEffect } from "react";
import todos from "./api";

import Form from "./components/Form"
import Section from "./components/Section"
import List from "./components/List"
import style from "./app.css"

const appTitle = "Things to be done TODAY!"


const App = () => {
    document.body.style.backgroundColor = "#BEBDB2";
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        async function fetchData() {
            const { data } = await todos.get("/todos/");
            setTodoList(data);
        }
        fetchData()
    }, []);

    const addTodo = async (item) => {
        const { data } = await todos.post("/todos/", item);
        setTodoList((oldList) => [...oldList, data])
    }

    const removeTodo = async (id) => {
        await todos.delete("/todos/" + id)
        setTodoList((oldList) => oldList.filter((item) => item._id !== id))
    }

    const editTodo = async (id, item) => {
        await todos.put("/todos/" + id, item)
    };

    const currDate = new Date().toLocaleDateString();

    return <div className="main">

        <Section className={style.main}>
            <h1>{appTitle}</h1>
        </Section>

        <Section>
            <h3>{currDate}</h3>
        </Section>

        <Section>
            <Form addTodo={addTodo} />
        </Section>

        <Section>
            <List
                editTodoListProp={editTodo}
                removeTodoListProp={removeTodo} list={todoList} />
        </Section>



    </div>
}

export default App;
