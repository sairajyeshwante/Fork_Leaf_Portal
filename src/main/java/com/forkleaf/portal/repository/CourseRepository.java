package com.forkleaf.portal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.forkleaf.portal.entity.Course;

@Repository
@RepositoryRestResource(path="courses")
public interface CourseRepository extends JpaRepository<Course, Integer> {
	
	Optional<Course> findByCourseTitle(String title);
//	Optional<Course> findTopByOrderByIdDesc();

}