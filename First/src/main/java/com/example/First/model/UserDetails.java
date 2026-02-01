package com.example.First.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table (name="userDetais")
public class UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userid;
    private String username;
    private String email;

    public UserDetails (){}

    public UserDetails(Long userid,String username,String email){
        this.userid=userid;
        this.username=username;
        this.email=email;
    }

    public Long getUserid(){
        return userid;
    }
    public void setUserid(Long userid){
        this.userid=userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
