package com.example.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springbootbackend.model.Employee;
import org.springframework.stereotype.Repository;
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // all crud database methods
}