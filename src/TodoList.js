import React, { Component } from 'react'
import './todo-list.css'
import marked from 'marked'

export class TodoList extends Component {
  removeTodo = todo => () => this.props.removeTodo(todo)

  render() {
    return (
      <div>
        <ul class="ul-none">
          {this.props.todos.map(todo => (
            <li key={todo.id}>
              <h4>:: {todo.title} ::</h4>
              <div dangerouslySetInnerHTML={{ __html: marked(todo.text) }} />
              <button onClick={this.removeTodo(todo)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoList
