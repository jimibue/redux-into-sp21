import React from 'react';
import { connect } from 'react-redux'
import Todo from './Todo';

const TodoList = (props) => {
    const renderTodos = () => {

        let visibleTodos = []
        console.log(props.filter)

        switch(props.filter){
           case "completed":
            console.log( "completed!!")
               visibleTodos = props.todos.filter(t => t.complete)
               break
            case "incomplete":
                console.log( "incomplete!!")
                visibleTodos = props.todos.filter(t => !t.complete) 
                break
            default :
               visibleTodos = props.todos
        }

        return visibleTodos.map(todo => <Todo key={todo.id} {...todo}/>)
    }
    return (
        <div>
            <h1>Todos:</h1>
            <p>current filter: {props.filter}</p>
            <div>
                {renderTodos()}
            </div>
        </div>
    )
}

const mapGlobaleStateToComponentProps = (globalState) => {
    return { todos: globalState.todos,
             filter: globalState.filter
    
    }
}

export default connect(mapGlobaleStateToComponentProps)(TodoList)


