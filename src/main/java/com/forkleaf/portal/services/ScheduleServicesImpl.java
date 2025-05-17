package com.forkleaf.portal.services;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.forkleaf.portal.entity.Schedule;
import com.forkleaf.portal.repository.ScheduleRepository;

@Service
public class ScheduleServicesImpl implements ScheduleServices {

	private final ScheduleRepository scheduleRepository;

	// Constructor Injection for Repository & Upload Directory
	public ScheduleServicesImpl(ScheduleRepository scheduleRepository) {
		this.scheduleRepository = scheduleRepository;
	}

	@Override
	public List<Schedule> getAllSchedules() {
		return scheduleRepository.findAll();
	}

	@Override
	public Optional<Schedule> getScheduleById(Long id) {
		return scheduleRepository.findById(id);
	}

	@Override
	public void deleteSchedule(Long id) {
		scheduleRepository.deleteById(id);
	}

	@Override
	public Schedule saveFile(MultipartFile file) throws IOException {
		// TODO Auto-generated method stub
		Schedule s = new Schedule();
		s.setFileName(file.getName());
		s.setFileType(file.getContentType());
		s.setUploadTime(LocalDateTime.now());
		s.setData(file.getBytes());
		return scheduleRepository.save(s);
	}

}
