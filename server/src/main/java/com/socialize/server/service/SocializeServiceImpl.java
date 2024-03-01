package com.socialize.server.service;

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
import java.util.List;
import java.util.Optional;
import java.util.TimeZone;

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
        List<User> checkEmail = userRepository.findByEmail(createUserDto.getEmail());
        if(checkEmail.isEmpty()){
            createUserDto.setPassword(passwordEncoder.encode(createUserDto.getPassword()));
            User user = new User(createUserDto.getUserName(), createUserDto.getEmail(), createUserDto.getPassword(), new Timestamp(System.currentTimeMillis()),new Timestamp(System.currentTimeMillis()));
            return new ResponseEntity(userRepository.save(user),HttpStatus.OK);
        }
        return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity checkUserNameAvaibility(String userName) {
        List<User> checkUser = userRepository.findByUserName(userName);
        if(checkUser.isEmpty()){
            return new ResponseEntity("Username available", HttpStatus.OK);
        }
        return new ResponseEntity("Username not available" ,HttpStatus.NOT_ACCEPTABLE);
    }

    @Override
    public ResponseEntity<User> login(LoginUserDto loginUserDto) {
        List<User> checkEmail = userRepository.findByEmail(loginUserDto.getEmail());
        if(!checkEmail.isEmpty()){
            User user = checkEmail.get(0);
            boolean checkPassword = passwordEncoder.matches(loginUserDto.getPassword(), user.getPassword());
            if(checkPassword)   return new ResponseEntity(user, HttpStatus.OK);
            else    return new ResponseEntity("Invalid Password", HttpStatus.NOT_ACCEPTABLE);
        }
        return new ResponseEntity(HttpStatus.NOT_FOUND);
    }


}
