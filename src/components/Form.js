import React, { useState } from "react"

const Form = ({ addTodo }) => {  // eslint-disable-line
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        if(inputValue.trim() === "") return
        addTodo({ title: inputValue, completed: false })  // eslint-disable-line
        setInputValue("")
    }
    
    return (
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column five wide">
                        <input 
                            value={inputValue}
                            onChange={handleInputChange}
                            type="text" 
                            placeholder="Enter a task" 
                        />
                    </div>

                    <div className="column one wide">
                        <button type="submit" className="ui button circular icon 25251E"><i className="white plus icon"></i></button>
                    </div>
                        
                </div>
            </div>
        </form>
    )
}

export default Form