package com.forkleaf.portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.forkleaf.portal.entity.Feedback;

@Repository
@RepositoryRestResource(path="feedbacks")
public interface FeedbackRepository extends JpaRepository<Feedback, Long> 
{
	
}

      