package com.socialize.server.service;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.socialize.server.dto.CreateUserDto;
import com.socialize.server.dto.LoginUserDto;
import com.socialize.server.model.User;
import com.socialize.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Time;
import java.sql.Timestamp;
import java.util.*;

@Service
public class SocializeServiceImpl implements SocializeService{

    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    @Autowired
    public SocializeServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public SocializeServiceImpl() {
    }

    @Override
    public ResponseEntity createAccount(CreateUserDto createUserDto) {

        try {
            List<User> checkEmail = userRepository.findByEmail(createUserDto.getEmail());
            if(checkEmail.isEmpty()){
                createUserDto.setPassword(passwordEncoder.encode(createUserDto.getPassword()));
                User user = new User(createUserDto.getUserName(), createUserDto.getEmail(), createUserDto.getPassword(), new Timestamp(System.currentTimeMillis()),new Timestamp(System.currentTimeMillis()));
                return new ResponseEntity(userRepository.save(user),HttpStatus.OK);
            }
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public ResponseEntity checkUserNameAvaibility(String userName) {
        Map<String,Boolean> response = new HashMap<>();
        try {
            List<User> checkUser = userRepository.findByUserName(userName);
            if(checkUser.isEmpty()){
                response.put("available", true);
                return ResponseEntity.accepted().body(response);
            }
            else{
                response.put("available", false);
                return ResponseEntity.badRequest().body(response);
            }
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public ResponseEntity<User> login(LoginUserDto loginUserDto) {
        try {
            List<User> checkEmail = userRepository.findByEmail(loginUserDto.getEmail());
            if(!checkEmail.isEmpty()){
                User user = checkEmail.get(0);
                boolean checkPassword = passwordEncoder.matches(loginUserDto.getPassword(), user.getPassword());
                if(checkPassword)   return new ResponseEntity(user, HttpStatus.OK);
                else    return new ResponseEntity("Invalid Password", HttpStatus.NOT_ACCEPTABLE);
            }
            return new ResponseEntity(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


}
