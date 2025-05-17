package com.forkleaf.portal.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Coordinator {
	@Id
	@Column(name = "Emp_id")
	private String employeeId;

	@Column(name = "Full_Name")
	private String fullName;

	@Column(name = "Email")
	private String email;

	@ManyToOne
	@JoinColumn(name = "course_id",referencedColumnName="course_id", nullable = false)
	private Course course;

	@Column(name = "password")
	private String password;

}
