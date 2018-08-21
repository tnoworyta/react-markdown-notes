import React, { Component } from 'react'
import './todo-add.css'
import marked from 'marked'

export class TodoAdd extends Component {
  state = { title: 'Some title', text: '## Some desc \n* a n \n* b' }

  handleTitleChange = ({ target: { value } }) => this.setState({ title: value })
  handleChange = ({ target: { value } }) => this.setState({ text: value })

  addTodo = () => {
    this.props.addTodo(this.state.title, this.state.text)
    this.setState({ value: '' })
  }

  render() {
    const { text } = this.state
    return (
      <div>
        <div class="form">
          <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
          <br />
          <textarea value={this.state.text} rows={20} cols={50} onChange={this.handleChange} />
          <br />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <div class="preview" dangerouslySetInnerHTML={{ __html: marked(text) }} />
        <div class="clear-fix" />
      </div>
    )
  }
}

export default TodoAdd
