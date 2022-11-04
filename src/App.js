import React from "react";
import Header from "./components/Header"
import Button from "./components/Button"

// Could do it like this!
// const Test = function() {
//
// } 

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Button />
            </div>
        );
    }
}

export default App;
