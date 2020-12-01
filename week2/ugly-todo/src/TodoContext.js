import React, { Component } from 'react'
// -------------------------------------------------------------------------Importing Lodash-----------------------------------------------------------------------------------------------------------
import _ from '../node_modules/lodash'
// -------------------------------------------------------------------Importing Provider and Consumer-------------------------------------------------------------------------------------------------------------
const {Provider, Consumer} = React.createContext()

class TodoProvider extends Component {
    // ----------------------------------------------------------------------Setting State-----------------------------------------------------------------------------------------------------------
    state = {                         
        todos: [
            {
                editSelected: false,
                id: 0,
                title: 'Swat The Flies',
                description: 'Gotta Get Them All', 
                url: 'https://images.unsplash.com/photo-1589358141768-0be9002874f0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80', 
                comments: ['Wow this Is ugly']
            },
            {
                editSelected: false,
                id: 1, 
                title: 'Trim The House', 
                description: `Why Can't I Just Hire Someone?`, 
                url: 'https://images.unsplash.com/photo-1603517432006-7127536be848?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80', 
                comments: ['Gotta make it look nice']
            },
            {
                editSelected: false,
                id: 2, 
                title: 'A Place I Would Not Live', 
                description: `We Are So Acostomed To How We Live`, 
                url: 'https://images.unsplash.com/photo-1566846724210-39d2b2c7ca0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80', 
                comments: ['Man, I feel bad']
            }
        ]
    } 
    // ------------------------------------------------------------------------Edit To Do-----------------------------------------------------------------------------------------------------------------
    editTodo = (e) => {
            console.log(this.state.todos)
            const {title, description} = e.target
            this.setState(_.replace({title: title,}))
            
            // console.log(this.state.todos)
            // this.setState({editSelected: true, id: id })
            console.log(this.state)
    }
    // ----------------------------------------------------------------------Deleting To Do------------------------------------------------------------------------------------------------------------
    deleteTodo = (id) => {
        this.state.todos.forEach(i => {
            let updatedTodos = this.state.todos
                if (i.id === id) {
                    _.remove(updatedTodos, i)
                        this.setState({todos: updatedTodos})
            }
        })
    }
    // ---------------------------------------------------------------------Handeling Change-----------------------------------------------------------------------------------------------------------
    handleChange = (e) => {
        const {name, value} = e.target    
            this.setState({[name]: value})
    }
    // ----------------------------------------------------------------------Form Submit------------------------------------------------------------------------------------------------------------
    formSubmit = (e) => {
        e.preventDefault()
            const {id, title, description, url, todos} = this.state 
                _.map(todos, (object, i) => object.id = i) 
                    this.setState({todos: [...todos, {id, title, description, url}]}) 
    }
    // ----------------------------------------------------------------------------Render-------------------------------------------------------------------------------------------------------------
    render() {
    // ----------------------------------------------------------------Setting State Variables----------------------------------------------------------------------------------------------------------
        const {todos} = this.state 
        const formSubmit = this.formSubmit
        const handleChange = this.handleChange
        const deleteTodo = this.deleteTodo
        const editTodo = this.editTodo
        return (
    // --------------------------------------------------------------------Wrapping Children With Context----------------------------------------------------------------------------------------------------
            <Provider value={{todos, deleteTodo, handleChange, formSubmit, editTodo}}>  
                {this.props.children}
            </Provider>
        )
    }
}

export {TodoProvider, Consumer as TodoConsumer}