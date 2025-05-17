package com.forkleaf.portal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.forkleaf.portal.entity.Coordinator;

@Repository
@RepositoryRestResource(path="coordinators")
public interface CoordinatorRepository extends JpaRepository<Coordinator, String>
{
	Optional<Coordinator> findCoordinatorByEmployeeIdAndPassword(String id, String password);
}
