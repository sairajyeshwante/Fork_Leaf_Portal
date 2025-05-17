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

import com.forkleaf.portal.entity.Course;
import com.forkleaf.portal.services.CourseServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CourseController 
{
	@Autowired
	private CourseServices courseServices;
	
	@GetMapping("/courses")
	public List<Course> getAllCourses()
	{
		return courseServices.findAll();
	}
	
	@GetMapping("/courses/{id}")
	public Optional<Course> getCourseById(@PathVariable int id)
	{
		return courseServices.findById(id);
	}
	
	@PostMapping("/courses")
	public Course save( @RequestBody Course course)
	{
		return courseServices.save(course);
	}
	
	@DeleteMapping("/courses/{id}")
	public ResponseEntity<Void> deleteCourseById(@PathVariable int id) {
	    courseServices.deleteById(id);
	    return ResponseEntity.noContent().build();  // Return 204 No Content
	}

	
	 @PutMapping("/courses/{id}")
	    public String updateCourse(@PathVariable int id, @RequestBody Course course) {
	        // Delegate the update logic to the service layer
	        return courseServices.updateCourseById(id, course.getCourseTitle(), course.getCourseDesc());
	    }
	
	
}