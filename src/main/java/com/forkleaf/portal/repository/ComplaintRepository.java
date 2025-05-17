package com.forkleaf.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.forkleaf.portal.entity.Complaints;

@Repository
@RepositoryRestResource(path="complaints")
public interface ComplaintRepository extends JpaRepository<Complaints, Long> 
{
	
}
