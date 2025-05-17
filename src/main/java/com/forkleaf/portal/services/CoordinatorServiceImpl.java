package com.forkleaf.portal.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.forkleaf.portal.entity.Coordinator;
import com.forkleaf.portal.entity.Course;
import com.forkleaf.portal.repository.CoordinatorRepository;
import com.forkleaf.portal.repository.CourseRepository;

import jakarta.transaction.Transactional;

@Service
public class CoordinatorServiceImpl implements CoordinatorServices
{
	@Autowired
	private CoordinatorRepository coordinatorRepository;
	
	
	@Autowired
	private CourseRepository courseRepository;
	@Override
	public Optional<Coordinator> findById(String id) {
		return coordinatorRepository.findById(id);
	}

	@Override
	public List<Coordinator> findAll() {
		return coordinatorRepository.findAll();
	}

	@Override
	@Transactional
	public Coordinator save(Coordinator coordinator) {
	    // Check if an existing coordinator has the same employeeId
		//Optional<Course> c= courseRepository.findTopByOrderByIdDesc();
		Optional<Course> c= courseRepository.findByCourseTitle(coordinator.getCourse().getCourseTitle());
	    if (coordinatorRepository.existsById(coordinator.getEmployeeId())) {
	        throw new RuntimeException("Error: Employee ID already exists. Cannot add duplicate entry.");
	    }
	    if(c.isPresent()) {
	    	coordinator.setCourse(c.get());
	    	 return coordinatorRepository.save(coordinator);
	    }
	    else {
	    	throw new RuntimeException("No course is available.");
	    }
	    	 
	   
	}


	@Override
	@Transactional
	public void deleteById(String id) {
		coordinatorRepository.deleteById(id);
	}

	@Override
	public String updateCoordinatorById(String employeeId, String fullName, String email, Course course) {
		Coordinator existingCoordinator = coordinatorRepository.findById(employeeId).orElse(null);
		
		if(existingCoordinator != null)
		{
			existingCoordinator.setFullName(fullName);
			existingCoordinator.setEmail(email);
			existingCoordinator.setCourse(course);
			
			coordinatorRepository.save(existingCoordinator);
			return "Coordinator updated successfully!";
	    } else {
	        return "Coordinator not found with id " + employeeId;
	    }
	}
}
