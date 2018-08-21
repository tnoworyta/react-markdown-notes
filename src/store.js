import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

export const addTodo = (title, text) => ({
  type: 'ADD',
  payload: { id: +new Date(), title, text },
})

export const removeTodo = todo => ({
  type: 'REMOVE',
  payload: todo,
})

const initialState = []

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload]
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.payload.id)
    default:
      return state
  }
}

const store = createStore(combineReducers({ todos: todosReducer }), devToolsEnhancer())

export default store
