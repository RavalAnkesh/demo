package com.example.First.repository;

import com.example.First.model.EmpDetails;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmpDetailsRepository extends JpaRepository<EmpDetails,Long> {
    List<EmpDetails> findByempname(String empname);
}
