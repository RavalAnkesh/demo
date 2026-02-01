package com.example.First.model;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Table (name="Employee")
public class EmpDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long empid;
    private String empname;
    private double salary;
    private String  deptname;

    public EmpDetails(){}
    public EmpDetails(Long empid,String empname,double salary,String deptname){
        this.empid=empid;
        this.empname=empname;
        this.salary=salary;
        this.deptname=deptname;
    }

    public Long getEmpid(){
        return empid;
    }
    public void setEmpid(Long empid){
        this.empid=empid;
    }

    public String getEmpname() {
        return empname;
    }

    public void setEmpname(String empname) {
        this.empname = empname;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public String getDeptname() {
        return deptname;
    }

    public void setDeptname(String deptname) {
        this.deptname = deptname;
    }

}
