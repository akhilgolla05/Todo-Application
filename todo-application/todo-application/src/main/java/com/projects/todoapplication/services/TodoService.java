package com.projects.todoapplication.services;

import com.projects.todoapplication.entity.Todo;

import java.util.List;

public interface TodoService {

    List<Todo> getAllTodosForUser(String userName);

    Todo retrieveTodoForUserById(String username, int id);

    Todo addTodoForUser(Todo todo);

    void deleteAllTodosForUser(String username);

    void deleteAllTodosForUserById(String username, int id);

    Todo updateTodoForUserById(String username, int id, Todo todo);
}
