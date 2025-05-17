package com.forkleaf.portal.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.forkleaf.portal.entity.Course;
import com.forkleaf.portal.entity.LoginReq;
import com.forkleaf.portal.entity.Student;
import com.forkleaf.portal.repository.CourseRepository;
import com.forkleaf.portal.repository.StudentRepository;

@CrossOrigin(origins = "*")
@RestController
public class StudentController {

	@Autowired
	StudentRepository studRepo;

	@Autowired
	CourseRepository courseRepo;

	@PostMapping("/saveStudent")
	public ResponseEntity<String> save(@RequestBody Student student) {
		if (studRepo.findById(student.getPrn()).isPresent())
			return ResponseEntity.status(HttpStatus.METHOD_NOT_ALLOWED).body("Student already exists");

		try {
			studRepo.save(student);
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Invalid Arguments");
		}

		return ResponseEntity.ok("Student saved");
	}

	@GetMapping("/getStudent/{id}")
	public Optional<Student> fetchStudent(@PathVariable String id) {
		return studRepo.findById(id);
	}

	@PostMapping("/studLogin")
	public ResponseEntity<String> studLogin(@RequestBody LoginReq req) {
		Optional<Course> course = courseRepo.findByCourseTitle(req.courseName().trim());

		if (course.isPresent()) {
			Optional<Student> s = studRepo.findByPrnAndPassword(req.id(), req.password());
			if (s.isPresent() && s.get().getCourse().getCourseTitle().equals(course.get().getCourseTitle())) {
				return ResponseEntity.ok("Student Login Successfull");
			}
		}

		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Student Login Failed");
	}
}
