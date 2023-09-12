package by.andrew.informatic.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PageController {
    @GetMapping
    public String mainPage(){
        return "index";
    }
    @GetMapping("/task")
    public String taskPage(@RequestParam("id") Long id){
        return "task";
    }

    @GetMapping("/admin")
    public String adminPage(){
        return "admin";
    }
}
