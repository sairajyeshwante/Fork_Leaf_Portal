package com.forkleaf.portal.services;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import com.forkleaf.portal.entity.Schedule;

public interface ScheduleServices 
{
    List<Schedule> getAllSchedules();
    Optional<Schedule> getScheduleById(Long id);
    void deleteSchedule(Long id);
    Schedule saveFile(MultipartFile file) throws IOException;

}
