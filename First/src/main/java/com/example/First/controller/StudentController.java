package com.example.First.controller;

import com.example.First.model.Student;
import com.example.First.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping
    public ResponseEntity<Student> create(@RequestBody Student student){
        Student st = studentService.create(student);
        return new ResponseEntity<>(st, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<Student>> show(){
        List<Student> st = studentService.show();
        return new ResponseEntity<>(st,HttpStatus.FOUND);
    }

    @GetMapping("/{sid}")
    public ResponseEntity<Student> showbyid(@PathVariable Long sid){
        Student st=studentService.showById(sid);
        return new ResponseEntity<>(st,HttpStatus.FOUND);
    }
    @PutMapping("/{sid}")
    public ResponseEntity<Student> update(@PathVariable Long sid,@RequestBody Student student){
        Student st = studentService.update(sid,student);
        return new ResponseEntity<>(st,HttpStatus.CREATED);
    }
    @DeleteMapping("/{sid}")
    public ResponseEntity<String>delete(@PathVariable Long sid){
        studentService.delete(sid);
        return new ResponseEntity<>("Deleted Success...",HttpStatus.GONE);
    }
}
