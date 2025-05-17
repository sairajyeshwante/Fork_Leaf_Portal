package com.forkleaf.portal.services;

import java.util.List;
import java.util.Optional;

import com.forkleaf.portal.entity.Coordinator;
import com.forkleaf.portal.entity.Course;

public interface CoordinatorServices 
{
public Optional<Coordinator> findById(String id);
	
	public List<Coordinator> findAll();
	
	public Coordinator save(Coordinator coordinator);
	
	public void deleteById(String id);
	
	public String updateCoordinatorById(String employeeId, String fullName, String email, Course course);
}
