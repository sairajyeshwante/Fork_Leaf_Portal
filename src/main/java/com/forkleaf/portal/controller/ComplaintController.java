package com.forkleaf.portal.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.forkleaf.portal.entity.Complaints;
import com.forkleaf.portal.services.ComplaintServices;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/complaints")
public class ComplaintController {
    private final ComplaintServices complaintServices;

    public ComplaintController(ComplaintServices complaintServices) {
        this.complaintServices = complaintServices;
    }

    @PostMapping("/submit")
    public Complaints submitComplaint(@RequestBody Complaints complaints) {
        return complaintServices.saveComplaint(complaints);
    }

    @GetMapping("/all")
    public List<Complaints> getAllFeedback() {
        return complaintServices.getAllComplaints();
    }
}

