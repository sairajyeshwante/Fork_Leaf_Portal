package com.forkleaf.portal.services;

import java.util.List;
import java.util.Optional;

import com.forkleaf.portal.entity.Course;

public interface CourseServices 
{
	public Optional<Course> findById(int id);
	
	public List<Course> findAll();
	
	public Course save(Course course);
	
	public void deleteById(int id);
	
	public String updateCourseById(int courseId, String courseTitle, String courseDesc);

}
