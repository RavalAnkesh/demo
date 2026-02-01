package com.example.First.service;

import com.example.First.model.Student;
import com.example.First.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private  StudentRepository studentRepository;

    public Student create(Student student){
        if (student.getSname() == null){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Not Empty...");
        }
        return studentRepository.save(student);
    }
    public List<Student> show(){
        return studentRepository.findAll();
    }

    public Student showById(Long sid){
        return studentRepository.findById(sid).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND));
    }

    public Student update(Long sid,Student student){
        Student st=studentRepository.findById(sid).orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND));
        if (st != null){
            st.setSname(student.getSname());
            return studentRepository.save(st);
        }
        return null;
    }

    public void delete(Long sid){
        if (!studentRepository.existsById(sid)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Not Found");
        }
        studentRepository.deleteById(sid);
    }
}
