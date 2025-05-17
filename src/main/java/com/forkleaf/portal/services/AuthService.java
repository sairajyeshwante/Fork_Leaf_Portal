//package com.forkleaf.portal.services;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.forkleaf.portal.entity.Admin;
//import com.forkleaf.portal.entity.Coordinator;
//import com.forkleaf.portal.entity.Student;
//import com.forkleaf.portal.repository.AdminRepository;
//import com.forkleaf.portal.repository.CoordinatorRepository;
//import com.forkleaf.portal.repository.StudentRepository;
//import com.forkleaf.portal.security.JwtUtil;
//
//@Service
//public class AuthService {
//
//    @Autowired
//    private AdminRepository adminRepo;
//    
//    @Autowired
//    private CoordinatorRepository coordinatorRepo;
//    
//    @Autowired
//    private StudentRepository studentRepo;
//
//    @Autowired
//    private JwtUtil jwtUtil;
//
//    public String login(Long id, String password, String role) {
//        if ("ADMIN".equalsIgnoreCase(role)) {
//            Admin admin = adminRepo.findById(id)
//                    .orElseThrow(() -> new RuntimeException("Admin not found"));
//            if (!admin.getPassword().equals(password)) throw new RuntimeException("Invalid credentials");
//            return jwtUtil.generateToken(String.valueOf(id), "ADMIN");
//        } 
//        
//        else if ("COORDINATOR".equalsIgnoreCase(role)) {
//            Coordinator coordinator = coordinatorRepo.findById(String.valueOf(id))
//                    .orElseThrow(() -> new RuntimeException("Teacher not found"));
//            if (!coordinator.getPassword().equals(password)) throw new RuntimeException("Invalid credentials");
//            return jwtUtil.generateToken(String.valueOf(id), "TEACHER");
//        } 
//        
//        else if ("STUDENT".equalsIgnoreCase(role)) {
//            Student student = studentRepo.findById(id)
//                    .orElseThrow(() -> new RuntimeException("Student not found"));
//            if (!student.getPassword().equals(password)) throw new RuntimeException("Invalid credentials");
//            return jwtUtil.generateToken(String.valueOf(id), "STUDENT");
//        }
//
//        throw new RuntimeException("Invalid role");
//    }
//}