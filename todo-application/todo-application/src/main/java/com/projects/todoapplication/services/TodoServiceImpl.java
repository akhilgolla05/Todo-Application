package com.projects.todoapplication.services;

import com.projects.todoapplication.entity.Todo;
import com.projects.todoapplication.exceptions.TodoNotFoundException;
import com.projects.todoapplication.repository.TodoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.function.Predicate;

@Service
public class TodoServiceImpl implements TodoService{

    private TodoRepository todoRepository;

    public TodoServiceImpl(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }


    @Override
    public List<Todo> getAllTodosForUser(String userName) {

        List<Todo> todosOnUserName = todoRepository.findByUserName(userName);

        return todosOnUserName;
    }

    @Override
    public Todo retrieveTodoForUserById(String username, int id) {

        List<Todo> todos = todoRepository.findByUserName(username);


        Predicate<? super Todo> predicate = todo->todo.getId() == id;
        Todo todo = todos.stream().filter(predicate).findFirst().orElse(null);
        if(todo == null)
        {
            throw new TodoNotFoundException("Todo With id : "+id + " not found");
        }

        return todo;
    }

    @Override
    public Todo addTodoForUser(Todo todo) {

        Todo newTodo = todoRepository.save(todo);

        return newTodo;
    }

    @Override
    public void deleteAllTodosForUser(String username) {

        List<Todo> todos = todoRepository.findByUserName(username);

        todoRepository.deleteAll(todos);

    }

    @Override
    public void deleteAllTodosForUserById(String username, int id) {

        List<Todo> todos = todoRepository.findByUserName(username);

        Predicate<? super Todo> predicate = (todo)-> todo.getId() == id;
        Todo todo = todos.stream().filter(predicate).findFirst().orElse(null);
        if(todo == null)
        {
            throw new TodoNotFoundException("Todo With id : "+id + " not found");
        }
        todoRepository.delete(todo);
    }

    @Override
    public Todo updateTodoForUserById(String username, int id, Todo todo) {

        Todo t = new Todo();
        BeanUtils.copyProperties(todo, t);
        Todo updatedTodo = todoRepository.save(t);

        return updatedTodo;
    }
}
