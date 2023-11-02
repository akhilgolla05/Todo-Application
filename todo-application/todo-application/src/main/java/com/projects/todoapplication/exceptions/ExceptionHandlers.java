package com.projects.todoapplication.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class ExceptionHandlers {

    @ExceptionHandler
    private ResponseEntity<ErrorMessage> TodoNotFoundExceptionHandler(TodoNotFoundException ex)
    {
        ErrorMessage message = new ErrorMessage();
        message.setStatus(HttpStatus.NOT_FOUND.value());
        message.setMessage(ex.getMessage());
        message.setTimeStamp(System.currentTimeMillis());

        return new ResponseEntity<ErrorMessage>(message, HttpStatus.NOT_FOUND);
    }
}
