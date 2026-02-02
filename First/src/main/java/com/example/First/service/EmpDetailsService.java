package com.example.First.service;

import com.example.First.model.EmpDetails;
import com.example.First.repository.EmpDetailsRepository;
import com.example.First.repository.UserDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class EmpDetailsService {
    @Autowired
    private  EmpDetailsRepository empDetailsRepository;
    @Autowired
    private UserDetailsRepository userDetailsRepository;

    public EmpDetails createEmp (EmpDetails empDetails){
        return empDetailsRepository.save(empDetails);
    }

    public List<EmpDetails> showEmp(){
        return empDetailsRepository.findAll();
    }

    public EmpDetails findByEmpId(Long empid){
        return empDetailsRepository.findById(empid)
                .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND,"Not User found"));
    }

    public List<EmpDetails> findByEmpname(String empname){
        return  empDetailsRepository.findByempname(empname);
    }

    public EmpDetails updateEmp(Long empid,EmpDetails empDetails){
        EmpDetails existemp=empDetailsRepository.findById(empid)
                .orElseThrow(()-> new ResponseStatusException(HttpStatus.NOT_FOUND,"Not user found"));

        if (existemp != null){
            existemp.setEmpname(empDetails.getEmpname());
            existemp.setSalary(empDetails.getSalary());
            existemp.setDeptname(empDetails.getDeptname());
            return empDetailsRepository.save(existemp);
        }
        return null;
    }

    public void deleteEmp(Long empid){
        empDetailsRepository.deleteById(empid);
    }
}

