
import axios from "axios"

export const apiClient = axios.create(
    {
        baseURL : "http://localhost:8080/api"
    }
    
)

export const retrieveTodos = ()=>
    apiClient.get("/todos/mohanmandi")

export const retrieveTodoByIdApi = (id)=>
    apiClient.get(`/todos/mohanmandi/${id}`)

export const deleteTodoApi = (id)=>
    apiClient.delete(`/todos/mohanmandi/${id}`)

export const createTodoApi = (todo) =>
    apiClient.post("/todos",todo)

export const updateTodoApi = (id, todo)=>
    apiClient.put(`/todos/mohanmandi/${id}`,todo)