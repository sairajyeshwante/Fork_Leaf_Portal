package com.forkleaf.portal.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.forkleaf.portal.entity.Admin;
import com.forkleaf.portal.entity.AdminReq;
import com.forkleaf.portal.repository.AdminRepository;

@CrossOrigin(origins = "*")
@RestController
public class AdminController {
	@Autowired
	private AdminRepository adminRepository;

	@PostMapping("/adminlogin")
	public ResponseEntity<String> getCoordinatorById(@RequestBody AdminReq req) {
		Optional<Admin> a = adminRepository.findById(req.id());
		if (a.isPresent() && a.get().getPassword().equals(req.password()))
			return ResponseEntity.ok("Login Success");

		return ResponseEntity.status(401).body("Login Fail");
	}
}
