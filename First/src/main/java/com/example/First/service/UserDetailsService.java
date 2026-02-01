package com.example.First.service;

import com.example.First.model.UserDetails;
import com.example.First.repository.UserDetailsRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.net.http.HttpRequest;
import java.util.List;

@Service
public class UserDetailsService {
    private  final UserDetailsRepository userDetailsRepository;
    public UserDetailsService(UserDetailsRepository userDetailsRepository){
        this.userDetailsRepository=userDetailsRepository;
    }

    public UserDetails createUser(UserDetails userDetails){
        return userDetailsRepository.save(userDetails);
    }

    public List<UserDetails> getallUserDetails(){
        return userDetailsRepository.findAll();
    }

    public UserDetails getByUserid(Long userid){
        return userDetailsRepository.findById(userid)
                .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Not Found "));
    }

    public UserDetails updateUser(Long userid,UserDetails userDetails){
        UserDetails exist = userDetailsRepository.findById(userid)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"Not user Found"));
        if (exist != null){
            exist.setUsername(userDetails.getUsername());
            exist.setEmail(userDetails.getEmail());
            return userDetailsRepository.save(exist);
        }
        return null ;
    }

    public void deleteUser(Long userid){
        userDetailsRepository.deleteById(userid);
    }
}
