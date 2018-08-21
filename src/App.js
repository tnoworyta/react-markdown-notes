import React, { Component } from 'react'
import './App.css'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo, removeTodo } from './store'

import TodoAdd from './TodoAdd'
import TodoList from './TodoList'

class App extends Component {
  addTodo = (title, text) => this.props.addTodo(title, text)

  removeTodo = todo => this.props.removeTodo(todo)

  render() {
    const { todos } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <h2>Notes</h2>
        </div>
        <div className="App-intro">
          <TodoAdd addTodo={this.addTodo} />
          <TodoList todos={todos} removeTodo={this.removeTodo} />
          <div>Count: {todos.length}</div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ todos }) => ({
  todos,
})
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addTodo,
      removeTodo,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
