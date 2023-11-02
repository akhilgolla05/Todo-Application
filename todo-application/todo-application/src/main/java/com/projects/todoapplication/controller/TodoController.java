package com.projects.todoapplication.controller;

import com.projects.todoapplication.entity.Todo;
import com.projects.todoapplication.services.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TodoController {

    private TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/todos/{username}")
    public List<Todo> getAllTodosForUser(@PathVariable String username)
    {
        return todoService.getAllTodosForUser(username);
    }

    @GetMapping("/todos/{username}/{id}")
    public Todo getTodoForUserById(@PathVariable String username, @PathVariable int id)
    {
        return todoService.retrieveTodoForUserById(username, id);
    }

    @PostMapping("/todos")
    public Todo addTodoForUser(@RequestBody Todo todo)
    {
        return todoService.addTodoForUser(todo);
    }

    @DeleteMapping("/todos/{username}")
    public ResponseEntity<Void> deleteAllTodosForUser(@PathVariable String username)
    {
        todoService.deleteAllTodosForUser(username);

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/todos/{username}/{id}")
    public ResponseEntity<Void> deleteAllTodosForUserById(@PathVariable String username, @PathVariable int id)
    {
        todoService.deleteAllTodosForUserById(username, id);

        return ResponseEntity.noContent().build();
    }

    @PutMapping("/todos/{username}/{id}")
    public Todo updateTodoForUserById(@PathVariable String username, @PathVariable int id, @RequestBody Todo todo)
    {
        return todoService.updateTodoForUserById(username, id, todo);
    }
}
