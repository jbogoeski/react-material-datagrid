import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Todos from "./components/Todos";
import ExampleDataGrid from './components/DataGrid/ExampleDataGrid';



import './App.css';

class App extends Component {

    state = {
        todos: [
            {
                id: 1,
                title: 'First out of this',
                completed: false
            },
            {
                id: 2,
                title: 'Second out of this',
                completed: false
            },
            {
                id: 3,
                title: 'Third out of this',
                completed: false
            }
        ]
    }

    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        }) });
    }

    deleteTodo = (id) => {
        this.setState({ todos: [... this.state.todos.filter(todo => todo.id !== id)]}); 
    }


    render() {
        console.log(this.state.todos);
        return (
            <Router>
                <div>
                    {/*<ul>*/}
                        {/*<li>*/}
                            {/*<Link to="/">Home</Link>*/}
                        {/*</li>*/}
                        {/*<li>*/}
                            {/*<Link to="/about">About</Link>*/}
                        {/*</li>*/}
                    {/*</ul>*/}
                </div>

                <Switch>
                    <Route exact path="/">
                        <h1>App</h1>
                         <Todos todos={this.state.todos} markComplete={this.markComplete}
                         deleteTodo={this.deleteTodo}    />
                    </Route>
                    <Route path="/about">
                        <ExampleDataGrid />
                    </Route>
                </Switch>
            </Router>


        );

    }
}

export default App;