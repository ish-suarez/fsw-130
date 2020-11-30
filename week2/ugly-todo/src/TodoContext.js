import React, { Component } from 'react'
import _ from '../node_modules/lodash'

const {Provider, Consumer} = React.createContext()

class TodoProvider extends Component {
    state = { 
        todos: [
            {title: 'Ugly To Do', description: 'We Is The Time Going?', url: 'https://images.unsplash.com/photo-1589358141768-0be9002874f0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80'},
            {title: 'Ugly To Do', description: 'We Is The Time Going?', url: 'https://images.unsplash.com/photo-1589358141768-0be9002874f0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80'},
            {title: 'Ugly To Do', description: 'We Is The Time Going?', url: 'https://images.unsplash.com/photo-1589358141768-0be9002874f0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80'}
        ]
    } // Setting State

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    formSubmit = (e) => {
        e.preventDefault()
        const {title, description, url, todos} = this.state
        this.setState({todos: [...todos, {title, description, url}]})
        console.log(this.state.todos)
    }

    deleteTodo = (i) => {
        const {todos} = this.state
        todos.forEach(i => {
            let newTodos = todos
            if(i){
                _.remove(newTodos, i)
                console.log(newTodos)
                this.setState(newTodos)
            }
        })
    }

    render() {
        const {todos} = this.state
        const formSubmit = this.formSubmit
        const handleChange = this.handleChange
        const deleteTodo = this.deleteTodo
        return (
            <Provider value={{todos, deleteTodo, handleChange, formSubmit}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {TodoProvider, Consumer as TodoConsumer}