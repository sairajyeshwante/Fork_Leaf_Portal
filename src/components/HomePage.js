import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Bootstrap Carousel */}
      <div 
        id="carouselExampleDark" 
        className="carousel carousel-dark slide mx-auto w-3/4 md:w-1/2 lg:w-1/3 -mt-4 animated-carousel" 
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active animated-image" data-bs-interval="10000">
            <img src="/Images/FORK-LEAF PORTAL.png" className="d-block w-100 h-24 md:h-36 object-cover rounded-lg shadow-lg" alt="University Campus" />
          </div>
          <div className="carousel-item animated-image" data-bs-interval="2000">
            <img src="/Images/Image1.png" className="d-block w-100 h-24 md:h-36 object-cover rounded-lg shadow-lg" alt="Library" />
          </div>
          <div className="carousel-item animated-image">
            <img src="/Images/Image2.png" className="d-block w-100 h-24 md:h-36 object-cover rounded-lg shadow-lg" alt="Graduation Ceremony" />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;