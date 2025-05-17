import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CourseContentCss/CourseContent.css";

const dbdaCourseData = [
  {
    title: "Linux Programming, Git, and Cloud Computing",
    duration: "50 Hours",
    content: `
      <b>Linux Programming:</b><br/>
      Installation (Ubuntu and CentOS), Basics of Linux, Configuring Linux, Shells, Commands, and Navigation, 
      Common Text Editors, Administering Linux, Introduction to Users and Groups, Linux Shell Scripting, 
      Shell Computing, Introduction to Enterprise Computing, Remote Access.<br/><br/>
      
      <b>Introduction to Git/GitHub/GitLab:</b><br/>
      Introduction to Version Control Systems, Creating GitHub Repository, Using Git – Basic Git Commands, 
      Creating Projects on GitHub/GitLab, Managing Code Repositories.<br/><br/>
      
      <b>Introduction to Cloud Computing:</b><br/>
      Cloud Computing Basics, Understanding Cloud Vendors (AWS: EC2 Instance, Lambda and Azure: Azure Virtual Machines, 
      Azure Data Factory), Definition, Characteristics, Components, Cloud Providers, SAAS, PAAS, IAAS, 
      Organizational Scenarios of Cloud, Benefits and Limitations, Deploying Applications over Cloud, 
      Comparison among SAAS, PAAS, IAAS, Cloud Products and Solutions, Compute Products and Services, 
      Elastic Cloud Compute, Dashboard, Deploying AI and Analytics Workloads in Cloud Environments with Sample Mini Project.`,
  },
  
  {
    title: "Python and R Programming",
    duration: "80 Hours",
    content: `
      <b>Python Programming:</b><br/>
      Python Basics, If, If-Else, Nested If-Else, Looping (For, While, Nested Loops), Control Structures (Break, Continue, Pass), 
      Strings and Tuples (Accessing Strings, Basic Operations, String Slices), Working with Lists (Accessing Lists, Operations, 
      Functions and Methods), Files, Pickling, Modules, Dictionaries, Dictionary Comprehension, Functions and Functional Programming 
      (Declaring and Calling Functions), Declaring, Assigning, and Retrieving Values from Lists, Introducing Tuples, Accessing Tuples, 
      Visualizing Using Matplotlib, Seaborn.<br/><br/>
  
      Object-Oriented Programming (OOPs) Concepts:
      Class and Object, Attributes, Inheritance, Overloading, Overriding, Data Hiding, Generators, Decorators.
      
      Exception Handling:
      Operations Exception, Exception Handling (Except Clause, Try-Finally Clause, User-Defined Exceptions).<br/><br/>
  
      Data Wrangling and Advanced Concepts:
      Data Cleaning, Loading Images and Audio Files Using Python Libraries (Pillow, Scikit-learn), Creation of Python Virtual Environment, 
      Logging in Python.<br/><br/>
  
      <b>R Programming:</b><br/>
      Reading and Getting Data into R, Exporting Data from R, Data Objects (Data Types & Data Structures), Viewing Named Objects, 
      Structure of Data Items, Manipulating and Processing Data in R (Creating, Accessing, Sorting Data Frames, Extracting, Combining, 
      Merging, Reshaping Data Frames), Control Structures, Functions in R (Numeric, Character, Statistical), Working with Objects, 
      Viewing Objects within Objects, Constructing Data Objects.<br/><br/>
  
      Packages and Case Studies:
      Packages – Tidyverse, Dplyr, Tidyr, etc., Queuing Theory, Case Study.`,
  },
  
  {
    title: "Java Programming",
    duration: "70 Hours",
    content: `Introduction to Java Virtual Machine,Data Types, Operators and Language, OOPs Concepts, Constructs, Inner Classes and Inheritance, Interface and Package, Exceptions, Collections, Threads, Java.lang,, Java.util, Lambda Expressions,  Introduction to Streams, Introduction of JDBC API.`,
  },
  {
    title: "Advanced Analytics using Statistics",
    duration: "90 Hours",
    content: `Introduction to Business Analytics using some case studies, Summary Statistics, Making Right Business Decisions based on data, Statistical Concepts, Descriptive Statistics and its measures, Probability theory, Probability Distributions (Continuous and discrete- Normal, Binomial and Poisson distribution) and Data, Sampling and Estimation, Statistical Interfaces, Predictive modelling and analysis, Bayes’ Theorem, Central Limit theorem,Statistical Inference Terminology (types of errors, tails of test, confidence intervals etc.),Hypothesis Testing, Parametric Tests: ANOVA, t-test, Non parametric Tests- chi-Square, U-Test Data Exploration & preparation, Concepts of Correlation,  Covariance, Outliers, Simulation and Risk Analysis, Optimization, Linear, Integer, Overview of Factor Analysis, Directional Data Analytics, Functional Data Analysis, Predictive Modelling (From Correlation To Supervised Segmentation): Identifying Informative Attributes, Segmenting Data By Progressive Attributive, Models, Induction And Prediction, Supervised Segmentation, Visualizing Segmentations, Trees As Set Of Rules, Probability Estimation; Decision Analytics: Evaluating Classifiers, Analytical Framework, Evaluation, Baseline, Performance And Implications For Investments In Data; Evidence And Probabilities: Explicit Evidence Combination With Bayes Rule, Probabilistic Reasoning; Business Strategy: Achieving Competitive Advantages, Sustaining Competitive Advantages

  <b>Python Libraries </b> Pandas, Numpy, Scrapy,Plotly, Beautiful soup`,
  },
  {
    title: "Data Collection and DBMS (Principles, Tools & Platforms)",
    duration: "90 Hours",
    content: `Database Concepts (File System and DBMS), OLAP vs OLTP, Database Storage Structures (Tablespace, Control files, Data files), Structured and Unstructured data, SQL Commands (DDL, DML & DCL), Stored functions and procedures in SQL, Conditional Constructs in SQL, data collection, Designing Database schema,Normal Forms and ER Diagram, Relational Database modelling, Stored Procedures , Triggers. The tools and how data can be gathered in a systematic fashion, Data ware Housing concept, No-SQL, Data Models - XML, working with MongoDB, Cassandra- overview, comparison with MongoDB, working with Cassendra, Connecting DB’s with Python, Introduction to Data Driven Decisions, Enterprise Data Management, data preparation and cleaning techniques

    Understanding Data Lakes – concepts, architecture and components, Data Lake vs. Data Warehouse vs. Lakehouse, data storage management, processing and transformation, workflow orchestration, analytics in Data Lake, case study using Delta Lake with analytics and AI.`,
  },
  {
    title: "Big Data Technologies",
    duration: "150 Hours",
    content: `
      <b>Introduction to Big Data:</b><br/>
      Big Data - Beyond The Hype, Big Data Skills and Sources of Big Data, Big Data Adoption, Research and Changing Nature of Data Repositories, 
      Data Sharing and Reuse Practices, and Their Implications for Repository Data Curation.<br/><br/>
  
      <b>Hadoop:</b><br/>
      Introduction to Big Data Programming with Hadoop, Hadoop Ecosystem and Stack, The Hadoop Distributed File System (HDFS), Components of Hadoop, 
      Design of HDFS, Java Interfaces to HDFS, Architecture Overview, Development Environment, Hadoop Distribution and Basic Commands, 
      Eclipse Development, HDFS Command Line and Web Interfaces, HDFS Java API, Analyzing Data with Hadoop, Scaling Out, Hadoop Event Stream Processing, 
      Complex Event Processing.<br/><br/>
  
      <b>MapReduce:</b><br/>
      Introduction to MapReduce, Developing a MapReduce Application, How MapReduce Works, The Anatomy of a MapReduce Job Run, Failures, 
      Job Scheduling, Shuffle and Sort, Task Execution, MapReduce Types and Formats, MapReduce Features, Real-World MapReduce Applications.<br/><br/>
  
      <b>Hadoop Environment:</b><br/>
      Setting Up a Hadoop Cluster, Cluster Specification, Cluster Setup and Installation, Hadoop Configuration, Security in Hadoop, 
      Administering Hadoop, HDFS Monitoring and Maintenance, Hadoop Benchmarks.<br/><br/>
  
      <b>Apache Airflow / ETL Informatica:</b><br/>
      Introduction to Data Warehousing and Data Lakes, Designing Data Warehousing for an ETL Data Pipeline, Designing Data Lakes for ETL Data Pipeline, 
      ETL vs ELT.<br/><br/>
  
      <b>Introduction to HIVE:</b><br/>
      Programming with Hive, Data Warehouse System for Hadoop, Optimizing with Combiners and Practitioners, Bucketing, Common Algorithms 
      (Sorting, Indexing, Searching), Relational Manipulation (Map-Side and Reduce-Side Joins), Evolution, Purpose, and Use, 
      Case Studies on Ingestion and Warehousing.<br/><br/>
  
      <b>HBase:</b><br/>
      Overview, Comparison, and Architecture, Java Client API, CRUD Operations, Security in HBase.<br/><br/>
  
      <b>Apache Spark:</b><br/>
      Overview, APIs for Large-Scale Data Processing, Linking with Spark, Initializing Spark, Resilient Distributed Datasets (RDDs), 
      External Datasets, RDD Operations, Passing Functions to Spark, Job Optimization, Working with Key-Value Pairs, Shuffle Operations, 
      RDD Persistence, Removing Data, Shared Variables, Exploratory Data Analysis (EDA) Using PySpark, Deploying to a Cluster, 
      Spark Streaming, Spark MLlib and ML APIs, Spark DataFrames/Spark SQL, Integration of Spark and Kafka, Setting Up Kafka Producer and Consumer, 
      Kafka Connect API, MapReduce, Connecting Databases with Spark.`,
  },
  
  {
    title: "Data Visualization - Analysis and Reporting",
    duration: "50 Hours",
    content: `Business Intelligence- requirements, content and managements, information Visualization, Data analytics Life Cycle, Analytic Processes and Tools, Analysis vs. Reporting, MS Excel: Functions, Formula, charts, Pivots and Lookups, Data Analysis Tool pack: Descriptive Summaries, Correlation, Regression, Introduction to Tableau, Data sources in Tableau, Taxonomy of data visualization, Numeric, String, Date Calculations, LOD (Level of Detail) Expressions, Modern Data Analytic Tools, Visualization Techniques.`,
  },
  {
    title: "Machine Learning, Deep Learning, and Generative AI",
    duration: "180 Hours",
    content: `
      <b>Machine Learning:</b><br/>
      Introduction to Machine Learning, Formal Learning Model – PAC Learning, Bias-Complexity Trade-Off, The VC Dimension, Non-Uniform Learnability 
      (Structural Risk Minimization, Occam’s Razor, No Free Lunch Theorem), Regularization and Stability, Model Selection and Validation, 
      Machine Learning Taxonomy – Supervised, Unsupervised, and Semi-Supervised Learning, Practical Use Cases of Machine Learning.<br/><br/>
      
      <b>Unsupervised Learning:</b><br/>
      Clustering (K-Means and Its Variants), Hierarchical Clustering, Dimension Reduction Techniques (PCA, Kernel PCA, LDA, Random Projections), 
      Fundamentals of Information Theory.<br/><br/>
      
      <b>Supervised Learning:</b><br/>
      Simple and Ensemble Learning Methods – Classification and Regression (K-Nearest Neighbors, Decision Trees, Bayesian Analysis, Naïve Bayes Classifier, 
      Random Forest, Gradient Boosting Machines, Support Vector Machines, XGBoost, CatBoost, Linear and Non-Linear Regression), 
      Time Series Forecasting.<br/><br/>
      
      <b>Deep Learning:</b><br/>
      Introduction to Neural Networks (Neurons, Construction of Networks, Backpropagation), Modern Practical Deep Networks 
      (Deep Feedforward Networks, Regularization for Deep Learning, Optimization for Training Deep Models), 
      Convolutional Neural Networks (CNNs), Sequence Modeling Using Recurrent Neural Networks (RNNs), 
      Transfer Learning, Autoencoders, Object Detection, Object Segmentation and Tracking, Concepts of Natural Language Processing (NLP).<br/><br/>
      
      <b>Generative AI:</b><br/>
      Introduction to Transformers, Difference Between Encoder, Decoder, and Encoder-Decoder Architectures, Attention Mechanisms, 
      Overview of BERT, Applications of Transformers, Introduction to Large Language Models (LLMs), 
      Understanding and Handling Text Data, Fine-Tuning Pre-Trained Models, Reward Models and Alignment Strategies, 
      Practical Case Studies Using Small and Large Language Models (SLMs & LLMs), Deployment of LLMs.`,
  },
  
  {
    title: "Aptitude & Effective Communication",
    duration: "90 Hours",
    content: `
      <b>Aptitude:</b><br/>
      Percentage, Profit & Loss, Ratio & Proportion, Average, Mixture & Allegation, Simple Interest & Compound Interest, Number Systems, 
      Series, Cyclicity & Remainders, Data Interpretation, Syllogism, Coding & Decoding, Blood Relations, Seating Arrangements 
      (Linear & Circular), Ages, Puzzles, Time, Speed & Distance, Trains, Boats & Streams, Time & Work, Wages (Man-Days), 
      Pipes & Cisterns, Clocks, Permutations & Combinations, Probability, Calendar.<br/><br/>
      
      <b>Effective Communication:</b><br/>
      Fundamentals of Communication, The Art of Communication, Personality Development, English Grammar, Correct Usage of English, 
      Common Mistakes in English Communication, Listening Skills, Reading Skills, Writing Skills, Public Speaking, Presentation Skills, 
      Group Discussions, Interpersonal Skills, Personal Interviews.`,
  },
  
  {
    title: "Project",
    duration: "90 Hours",
    content: `
     Clustering and filtering approach in big data using Machine Learning Models, Energy efficient in big data gathering, Dynamic Big Data Storage on Cloud & Fine-Grained Updates.`,
  }
];

const DbdaCourseContent = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center course-title">COURSE CONTENTS (DBDA)</h2>
      <Accordion defaultActiveKey="0" alwaysOpen>
        {dbdaCourseData.map((course, index) => (
          <Accordion.Item eventKey={index.toString()} key={index} className="custom-accordion">
            <Accordion.Header>
              <strong>{course.title}</strong> - <span className="text-muted ms-2">{course.duration}</span>
            </Accordion.Header>
            <Accordion.Body dangerouslySetInnerHTML={{ __html: course.content }} />
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default DbdaCourseContent;
