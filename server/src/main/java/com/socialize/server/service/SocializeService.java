package com.socialize.server.service;

import com.socialize.server.dto.CreateUserDto;
import com.socialize.server.dto.LoginUserDto;
import com.socialize.server.model.User;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

public interface SocializeService {

    public ResponseEntity createAccount(CreateUserDto createUserDto);

    public ResponseEntity checkUserNameAvaibility(String userName);

    public ResponseEntity<User> login(LoginUserDto loginUserDto);
}
