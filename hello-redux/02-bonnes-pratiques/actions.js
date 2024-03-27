import { ADD_TODO, INCREMENT_LIKES, UPDATE_NAME, UPDATE_NEW_TODO } from "./constants.js"

export function incrementLikes() {
    return { type: INCREMENT_LIKES }
}

export function updateName(value) {
    return { type: UPDATE_NAME, payload: value }
}

export function updateNewTodo(value) {
    return { type: UPDATE_NEW_TODO, payload: value }
}

export function addTodo(title) {
    return { type: ADD_TODO, payload: { id: Math.random(), title: title, completed: false } }
}