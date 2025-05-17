package com.forkleaf.portal.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.forkleaf.portal.entity.Complaints;
import com.forkleaf.portal.repository.ComplaintRepository;

@Service
public class ComplaintServices {
    private final ComplaintRepository complaintRepository;

    public ComplaintServices(ComplaintRepository complaintRepository) {
        this.complaintRepository = complaintRepository;
    }

    public Complaints saveComplaint(Complaints complaints) {
        return complaintRepository.save(complaints);
    }

    public List<Complaints> getAllComplaints() {
        return complaintRepository.findAll();
    }
}


