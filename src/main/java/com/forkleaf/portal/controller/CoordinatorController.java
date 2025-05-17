package com.forkleaf.portal.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.forkleaf.portal.entity.Coordinator;
import com.forkleaf.portal.entity.Course;
import com.forkleaf.portal.entity.LoginReq;
import com.forkleaf.portal.repository.CoordinatorRepository;
import com.forkleaf.portal.repository.CourseRepository;
import com.forkleaf.portal.services.CoordinatorServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CoordinatorController {

	@Autowired
	private CoordinatorServices coordinatorServices;

	@Autowired
	CoordinatorRepository coordRepo;

	@Autowired
	CourseRepository courseRepo;

	@GetMapping("/coordinators")
	public List<Coordinator> getAllCoordinators() {
		return coordinatorServices.findAll();
	}

	@GetMapping("/coordinators/{id}")
	public Optional<Coordinator> getCoordinatorById(@PathVariable String id) {
		return coordinatorServices.findById(id);
	}

	@PostMapping("/coordinators")
	public Coordinator save(@RequestBody Coordinator coordinator) {
		return coordinatorServices.save(coordinator);
	}

	@DeleteMapping("/coordinators/{id}")
	public ResponseEntity<Void> deleteCoordinatorById(@PathVariable String id) {
		coordinatorServices.deleteById(id);
		return ResponseEntity.noContent().build(); // Return 204 No Content
	}

	@PutMapping("/coordinators/{id}")
	public String updateCourse(@PathVariable String id, @RequestBody Coordinator coordinator) {
		// Delegate the update logic to the service layer
		return coordinatorServices.updateCoordinatorById(id, coordinator.getFullName(), coordinator.getEmail(),
				coordinator.getCourse());
	}

	@PostMapping("/coordinatorLogin")
	public ResponseEntity<String> studLogin(@RequestBody LoginReq req) {
		Optional<Course> course = courseRepo.findByCourseTitle(req.courseName().trim());

		if (course.isPresent()) {
			Optional<Coordinator> c = coordRepo.findCoordinatorByEmployeeIdAndPassword(req.id(), req.password());
			if (c.isPresent() && c.get().getCourse().getCourseTitle().equals(course.get().getCourseTitle())) {
				return ResponseEntity.ok("Coordinator Login Successfull");
			}
		}

		return ResponseEntity.status(401).body("Coordinator Login Failed");
	}
}
