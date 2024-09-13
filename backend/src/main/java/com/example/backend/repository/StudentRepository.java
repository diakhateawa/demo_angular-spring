package com.example.backend.repository;

import com.example.backend.entities.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
@Repository
public interface StudentRepository extends JpaRepository<Student, String> {
    Student findByCode(String code);
    List<Student> findByProgramId(String programId);
}
