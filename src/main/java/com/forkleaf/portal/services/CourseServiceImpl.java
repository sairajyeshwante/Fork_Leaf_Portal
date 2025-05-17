package com.forkleaf.portal.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.forkleaf.portal.entity.Course;
import com.forkleaf.portal.repository.CourseRepository;

import jakarta.transaction.Transactional;

@Service
public class CourseServiceImpl implements CourseServices {

	@Autowired
	private CourseRepository courseRepository;
	
	@Override
	public Optional<Course> findById(int id) {
		return courseRepository.findById(id);
	}

	@Override
	public List<Course> findAll() {
		return courseRepository.findAll();
	}

	@Override
	@Transactional
	public Course save(Course course) {
	    // Check if an existing course has the same courseId
	    if (courseRepository.existsById(course.getCourseId())) {
	        throw new RuntimeException("Error: Course ID already exists. Cannot add duplicate entry.");
	    }
	    return courseRepository.save(course);
	}


	@Override
	@Transactional
	public void deleteById(int id) {
		courseRepository.deleteById(id);
	}
	
	@Override
	@Transactional
	public String updateCourseById(int courseId, String courseTitle, String courseDesc) {
	    // Find the course by ID
	    Course existingCourse = courseRepository.findById(courseId).orElse(null);

	    if (existingCourse != null) {
	        // Update the course properties
	        existingCourse.setCourseTitle(courseTitle);
	        existingCourse.setCourseDesc(courseDesc);

	        // Save the updated course
	        courseRepository.save(existingCourse);

	        return "Course updated successfully!";
	    } else {
	        return "Course not found with id " + courseId;
	    }
	}


}
