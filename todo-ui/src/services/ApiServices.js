
import axios from "axios"

export const apiClient = axios.create(
    {
        baseURL : "http://localhost:8080/api"
    }
    
)

export const retrieveTodos = (username)=>
    apiClient.get(`/todos/${username}`)

export const retrieveTodoByIdApi = (id,username)=>
    apiClient.get(`/todos/${username}/${id}`)

export const deleteTodoApi = (id,username)=>
    apiClient.delete(`/todos/${username}/${id}`)

export const createTodoApi = (todo) =>
    apiClient.post("/todos",todo)

export const updateTodoApi = (id,username, todo)=>
    apiClient.put(`/todos/${username}/${id}`,todo)

export const existsUserApi = (username)=>
    apiClient.get(`todos/exists/${username}`)

