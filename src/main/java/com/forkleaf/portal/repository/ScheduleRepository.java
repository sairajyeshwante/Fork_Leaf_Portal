package com.forkleaf.portal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.forkleaf.portal.entity.Schedule;

@Repository
@RepositoryRestResource(path="Schedules")
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
	Optional<Schedule> findTopByOrderByIdDesc();
}
