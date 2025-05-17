package com.forkleaf.portal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.forkleaf.portal.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, String>{
	Optional<Student> findByPrnAndPassword(String prn, String password);
}
