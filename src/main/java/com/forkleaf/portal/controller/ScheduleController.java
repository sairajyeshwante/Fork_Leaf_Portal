package com.forkleaf.portal.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.forkleaf.portal.entity.Schedule;
import com.forkleaf.portal.repository.ScheduleRepository;
import com.forkleaf.portal.services.ScheduleServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/schedule")
public class ScheduleController {

    private final ScheduleServices scheduleServices;
    private final ScheduleRepository scheduleRepository;//

    // Constructor Injection
    public ScheduleController(ScheduleServices scheduleServices, ScheduleRepository scheduleRepository) {
        this.scheduleServices = scheduleServices;
        this.scheduleRepository=scheduleRepository;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadSchedule(@RequestParam("file") MultipartFile file) {
        try {
            Schedule schedule = scheduleServices.saveFile(file);
            return ResponseEntity.ok("File uploaded successfully: " + schedule.getFileName());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File upload failed.");
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Schedule>> getAllSchedules() {
        return ResponseEntity.ok(scheduleServices.getAllSchedules());
    }

    @GetMapping("/download")
    public ResponseEntity<ByteArrayResource> downloadSchedule() throws IOException {
        Optional<Schedule> scheduleOpt = scheduleRepository.findTopByOrderByIdDesc();

        if (scheduleOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }


        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=" + scheduleOpt.get().getFileName())
                .contentType(MediaType.parseMediaType(scheduleOpt.get().getFileType()))  // Changed to a valid media type
                .body(new ByteArrayResource(scheduleOpt.get().getData()));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteSchedule(@PathVariable Long id) {
        scheduleServices.deleteSchedule(id);
        return ResponseEntity.ok("Schedule deleted successfully!");
    }
}
