package com.forkleaf.portal.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table (name="Courses")
public class Course 
{
	@Id
	@Column(name="course_id")
	private int courseId;
	
	@Column(name="course_title")
	private String courseTitle;
	
	@Column(name="course_desc")
	private String courseDesc;

}
