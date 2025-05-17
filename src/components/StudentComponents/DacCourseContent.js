import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CourseContentCss/CourseContent.css";

const courseData = [
  {
    title: "C++ Programming",
    duration: "72 Hours",
    content: `Operators & Expressions, Conditional and Looping Statements, Functions in C++, 
              Memory Management, OOP Concepts, Inheritance, Polymorphism, Exception Handling, 
              File Handling, STL and RTTI.`,
  },


  {
    title: "Operating System & Software Development Methodologies",
    duration: "74 Hours",
    content: `
      <b>Concepts of Operating Systems:</b><br/>
      Introduction to OS, Introduction to Linux, Shell programming, Processes, Memory management, Virtual Memory, Deadlock.<br/><br/>
      
      <b>Software Development Methodologies:</b><br/>
      Git, Software Engineering, Software Development Life Cycle, Object Oriented Analysis and Design, Agile development model, 
      Introduction to Atlassian Jira, DevOps, Containerisation, Docker, YAML, Kubernetes, Software testing, STLC and V Model, 
      Manual & Automation testing, Selenium, Jenkins.
    `,
  },


  {
    title: "Object Oriented Programming with Java",
    duration: "116 Hours",
    content: "Introduction to Java, JVM Architecture, Primitive data types, OOP Concepts using Java, Interfaces, Arrays, Garbage collection, Inner Class, Wrapper Classes and String Class, Exception Handling, java.io & java.nio Package, Object Class & java.util Package, Collections, MultiThreading, Synchronization, Lambada Expression, Generics and Reflection API, Java 8 Stream API",
  },


  {
    title: "Algorithms and Data Structures (Using Java)",
    duration: "72 Hours",
    content: "Problem Solving & Computational Thinking, Algorithms & Data, Structures, Basic Data Structures, Linked List Data Structures, Recursion, Trees & Applications, Searching Algorithms, Searching Algorithms, Sorting Algorithms, Hash Functions & Hash Tables, Graph & Applications, Algorithm Designs, Analysis of different type of Algorithms, Data Structure Implementation and Applications.",
  },


  {
    title: "Database Technologies",
    duration: "72 Hours",
    content: " DBMS, MySQL, Database Design, Entity-Relationship Diagram, Codd’s 12 rules for RDBMS, SQL, Categories of SQL Commands, Normalization, MySQL Data Types, Database Constraints, SQL Functions & Operators, Joins, Subquery, Views & Indexes, ACID Properties, Stored Procedures, Cursors, Triggers, Introduction to NoSQL, MongoDB",
  },


  {
    title: "Web Programming Technologies",
    duration: "112 Hours",
    content: "Architecture of Web, HTML, Cascading Style Sheets (CSS), Responsive Web Design & Web Security, JavaScript, jQuery, JSON & Ajax, Node.js, Node.js Asynchronous Programming, Node.js Modules, Node.js fs & http, Introduction to Express, React, Introduction to React-Redux",
  },


  {
    title: "Web-Based Java Programming",
    duration: "112 Hours",
    content: "J2EE Overview, Servlets, JSP, JDBC & Transaction Management, Hibernate Framework, Sessions, Spring Framework, Spring Boot, Spring Data Module, Spring AOP, Building REST Services with Spring, Testing in Spring, Securing Web Application with Spring Security, Microservices",
  },


  {
    title: "Microsoft .Net Technologies",
    duration: "90 Hours",
    content: " .Net Framework, Visual Studio, C# Basics, Interfaces & Indexers, Generic classes, Collections, Delegates, Lambdas, Error Handling (Exceptions Handling), LINQ to objects, PLINQ, Files I/O and Streams, Threading Asp.Net MVC, MVC State Management, MVC Module, Data Management with ADO.NET, Understanding Routing & Request Life Cycle, Layouts, Bundle, Minification, MVC Security, Entity Framework, Understanding ASP.Net MVC Core, Windows Communication Foundation, Web APIs, MVC Integration with React",
  },


  {
    title: "Aptitude & Effective Communication",
    duration: "90 Hours",
    content: `
      <b>Aptitude:</b><br/>
      Percentage, Profit & Loss, Ratio & Proportion, Average, Mixture & Allegation, Simple Interest & Compound Interest, 
      Number Systems, Series, Cyclicity & Remainders, Data Interpretation, Syllogism, Coding & Decoding, 
      Blood Relations, Seating Arrangements (Linear & Circular), Ages, Puzzles, Time, Speed & Distance, 
      Trains, Boats & Streams, Time & Work, Wages (Man-days), Pipes & Cisterns, Clocks, Permutations & Combinations, 
      Probability, Calendar.<br/><br/>
  
      <b>Effective Communication:</b><br/>
      Fundamentals of Communication, The Art of Communication, Personality Development, English Grammar, 
      Correct Usage of English, Common Mistakes in English Communication, Listening Skills, Reading Skills, 
      Writing Skills, Public Speaking, Presentation Skills, Group Discussions, Interpersonal Skills, 
      Personal Interviews.
    `,
  },


  {
    title: "Project",
    duration: "90 Hours",
    content: `
      In addition to the specific subject knowledge, the Software Project module attempts to put into practice a number of things that the students have learned during the PG-DAC course, such as:<br/><br/>
      
      • Ability to work in a team<br/>
      • Software development methodology and principles<br/>
      • Good programming practices<br/>
      • Technical reporting and presentation<br/><br/>
      
      <b>The Software Project module is divided into three phases:</b><br/><br/>
      
      <b>I – SRS Phase:</b><br/>
      <b>Tasks:</b> Requirements gathering, feasibility study, and project thinking.<br/><br/>
      
      <b>II – Design Phase:</b><br/>
      <b>Tasks:</b> Software design and project plan.<br/><br/>
      
      <b>III – Development Phase:</b><br/>
      <b>Tasks:</b> Coding and testing of the software system/application.
    `,
  }
  
  
];

const DacCourseContent = () => {
  return (
    <div className="container my-5">
      <b><h2 className="mb-4 text-center course-title">COURSE CONTENTS</h2></b>
      <Accordion defaultActiveKey="0" alwaysOpen>
        {courseData.map((course, index) => (
          <Accordion.Item eventKey={index.toString()} key={index} className="custom-accordion">
            <Accordion.Header>
              <strong>{course.title}</strong> - <span className="text-muted ms-2">{course.duration}</span>
            </Accordion.Header>
            {/* Rendering HTML content with formatting */}
            <Accordion.Body dangerouslySetInnerHTML={{ __html: course.content }} />
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default DacCourseContent;
