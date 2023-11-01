package com.projects.todoapplication.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TodoController {


    @ResponseBody
    @GetMapping("/hello")
    public String getAllTodos()
    {
        return "kanna";
    }
}
