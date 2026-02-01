package com.example.First.controller;

import com.example.First.model.UserDetails;
import com.example.First.service.UserDetailsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserDetailsController {

    private final UserDetailsService userDetailsService;

    public UserDetailsController(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    // CREATE
    @PostMapping
    public ResponseEntity<UserDetails> createUser(
            @RequestBody UserDetails userDetails) {

        UserDetails createdUser = userDetailsService.createUser(userDetails);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    // READ ALL
    @GetMapping
    public ResponseEntity<List<UserDetails>> getAll() {

        List<UserDetails> users = userDetailsService.getallUserDetails();
        return new ResponseEntity<>(users,HttpStatus.FOUND);
    }

    // READ BY ID
    @GetMapping("/{userid}")
    public ResponseEntity<UserDetails> getById(@PathVariable Long userid) {

        UserDetails user = userDetailsService.getByUserid(userid);
        return new ResponseEntity<>(user,HttpStatus.FOUND);
    }

    // UPDATE
    @PutMapping("/{userid}")
    public ResponseEntity<UserDetails> updateUser(@PathVariable Long userid, @RequestBody UserDetails userDetails) {

        UserDetails updatedUser = userDetailsService.updateUser(userid, userDetails);

        return new ResponseEntity<>(updatedUser,HttpStatus.CREATED);
    }

    // DELETE
    @DeleteMapping("/{userid}")
    public ResponseEntity<String> deleteUser(@PathVariable Long userid) {
        userDetailsService.deleteUser(userid);
        return new ResponseEntity<>("Deleted Successfull",HttpStatus.GONE);
    }
}
