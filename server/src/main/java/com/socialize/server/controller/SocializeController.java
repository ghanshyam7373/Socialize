package com.socialize.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SocializeController {

    @GetMapping("/api/auth/check")
    public String checking(){
        return "Hello";
    }

}
