package com.example.First.controller;

import com.example.First.model.EmpDetails;
import com.example.First.model.UserDetails;
import com.example.First.service.EmpDetailsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/emp")
public class EmpDetailsController {
    private final EmpDetailsService empDetailsService;
    public EmpDetailsController(EmpDetailsService empDetailsService){
        this.empDetailsService=empDetailsService;
    }

    @PostMapping
    public ResponseEntity<EmpDetails> createEmp(@RequestBody EmpDetails empDetails){
        EmpDetails emp= empDetailsService.createEmp(empDetails);
        return new ResponseEntity<>(emp,HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<EmpDetails>> showEmp(){
        List<EmpDetails> emp = empDetailsService.showEmp();
        return  new ResponseEntity<>(emp, HttpStatus.FOUND);
    }

    @GetMapping("/{empid}")
    public ResponseEntity<EmpDetails> showById(@PathVariable Long empid){
        EmpDetails emp=empDetailsService.findByEmpId(empid);
        return  new ResponseEntity<>(emp,HttpStatus.FOUND);
    }
    @GetMapping("/findbyname/{empname}")
    public ResponseEntity<List<EmpDetails>> findbyename(
            @PathVariable String empname) {

        List<EmpDetails> emp = empDetailsService.findByEmpname(empname);

        if (emp.isEmpty()) {
            return ResponseEntity.notFound().build(); // 404
        }

        return ResponseEntity.ok(emp);
    }


    @PutMapping("/{empid}")
    public ResponseEntity<EmpDetails>updateemp(@PathVariable Long empid,@RequestBody EmpDetails empDetails){
        EmpDetails emp=empDetailsService.updateEmp(empid,empDetails);
        return new ResponseEntity<>(emp,HttpStatus.CREATED);
    }

    @DeleteMapping("/{empid}")
    public ResponseEntity<String> deleteEmp(@PathVariable Long empid){
        empDetailsService.deleteEmp(empid);
        return new ResponseEntity<>("Deleted Successfull...",HttpStatus.GONE);
    }
}
