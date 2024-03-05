package com.socialize.server.controller;

import com.socialize.server.dto.CreateUserDto;
import com.socialize.server.dto.LoginUserDto;
import com.socialize.server.model.User;
import com.socialize.server.service.SocializeService;
import com.socialize.server.service.SocializeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class SocializeController {
    private SocializeServiceImpl socializeService;

   @Autowired
    public SocializeController(SocializeServiceImpl socializeService){
        this.socializeService = socializeService;
    }

    @PostMapping(value = "/api/auth/signup",produces = "application/json", consumes = "application/json")
    public ResponseEntity createAccount(@RequestBody CreateUserDto createUserDto){
        return socializeService.createAccount(createUserDto);
    }

    @GetMapping(value = "/api/auth/checkUsername/{userName}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity checkUserNameAvaibility(@PathVariable String userName){
       return socializeService.checkUserNameAvaibility(userName);
    }

    @PostMapping("/api/auth/login")
    public ResponseEntity<User> login(@RequestBody LoginUserDto loginUserDto){
       return socializeService.login(loginUserDto);
    }
}
