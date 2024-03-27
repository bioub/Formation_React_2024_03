import { INCREMENT_LIKES, UPDATE_NAME } from "./constants.js"

export function incrementLikes() {
    return { type: INCREMENT_LIKES }
}

export function updateName(value) {
    return { type: UPDATE_NAME, payload: value }
}