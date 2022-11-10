import React from "react"
import Todo from "./Todo"

const List = ({ list, removeTodoListProp, editTodoListProp }) => {  // eslint-disable-line
    const renderedList = list.map(  // eslint-disable-line
        (item) => (
        <Todo 
            title={item.title} 
            completed={item.completed} 
            removeTodoItemProp={() => removeTodoListProp(item._id)} 
            editTodoItemProp={(updatedItem) => editTodoListProp(item._id, updatedItem)}
            key={item.title} />)
        );
    return (
        <div className="ui grid center aligned">
            {renderedList}
        </div>
    )
}

export default List