package com.projects.todoapplication.exceptions;

public class TodoNotFoundException extends RuntimeException{

    public TodoNotFoundException(String message) {
        super(message);
    }
}
