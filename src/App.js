import React, { useState } from 'react';
import "./App.css";

function App() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    '/album1.jpg', // Replace with actual image paths
    '/album2.jpg',
    '/album3.jpg',
    '/album2.jpg',
    '/album1.jpg', // Replace with actual image paths
    '/album2.jpg',
    '/album3.jpg',
    '/album2.jpg',
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-left">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="navbar-middle">
          <div className="navbar-title">Suhail Mohammad Al Zarooni</div>
          <div className="navbar-links">
            <a href="#home" className="nav-link">Home</a>
            <a href="#events" className="nav-link">Events</a>
            <a href="#foundation" className="nav-link">Foundation</a>
            <a href="#museum" className="nav-link">Museum</a>
            <a href="#media" className="nav-link">Media</a>
            <a href="#collection" className="nav-link">Collection</a>
            <a href="#about" className="nav-link">About</a>
          </div>
        </div>
        <div className="navbar-right">
          <button className="subscribe-button">SUBSCRIBE</button>
          <span className="notification-icon">
            <img src="/notification-bell.png" alt="Notifications" />
          </span>
        </div>
      </div>

      {/* Video Section */}
      <div className="video-container">
        <video className="intro-video" controls autoPlay muted loop>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Logo Section */}
      <div className="logo-section">
        <h2 className="logo-section-title">Explore Al Zarooni's World</h2>
        <div className="logo-slider">
          <div className="logo-container">
            <img src="/Al zaroni events.png" alt="Logo 1" className="logo-item" />
            <img src="/Al zarooi Foundationn.png" alt="Logo 2" className="logo-item" />
            <img src="/Al zarooi House Dubai fainal 2023.png" alt="Logo 3" className="logo-item" />
            <img src="/Al Zarooni Museum small.png" alt="Logo 4" className="logo-item" />
            <img src="/Suhail AL Zarooni Collection.png" alt="Logo 5" className="logo-item" />
            <img src="/Suhail AL Zarooni Media.png" alt="Logo 6" className="logo-item" />
          </div>
        </div>
      </div>

    {/* Tab Section */}
    <div className="tabs-section">
    <div className="tabs-container">
      <button className="tab-button">Al Zarooni Foundation</button>
      <button className="tab-button">Al Zarooni Events</button>
      <button className="tab-button">Al Zarooni Media</button>
      <button className="tab-button">Al Zarooni Museum</button>
      <button className="tab-button">Al Zarooni Collection</button>
    </div>
  </div>

  {/* Album Section */}
  <div className="album-section">
    <div className="album-container">
      <div className="album-card">
        <img src="/album1.jpg" alt="Album 1" className="album-image" />
        <p className="album-title">Album of Excellency Visit in Pakistan</p>
      </div>
      <div className="album-card">
        <img src="/album2.jpg" alt="Album 2" className="album-image" />
        <p className="album-title">Album of Excellency Visit in Pakistan</p>
      </div>
      <div className="album-card">
        <img src="/album3.jpg" alt="Album 3" className="album-image" />
        <p className="album-title">Album of Excellency Visit in Pakistan</p>
      </div>
      <div className="album-card">
        <img src="/album2.jpg" alt="Album 4" className="album-image" />
        <p className="album-title">Album of Excellency Visit in Pakistan</p>
      </div>
      <div className="album-card">
        <img src="/album3.jpg" alt="Album 5" className="album-image" />
        <p className="album-title">Album of Excellency Visit in Pakistan</p>
      </div>
    </div>
  </div>
        {/* Description Section */}
        <div className="description-section">
        <p className="description-text">
          Suhail Mohammed Al Zarooni, first ever Emirati after the Royal family
          of United Arab Emirates (UAE) to be Awarded with a Guinness World
          Record Holder's Certificate Twice.
        </p>
      </div>
      <div className="stat-section">
      <div className="left-section">
        <div className="stat-title">
          <h2 className="stat-title">Suhail Mohammed Al Zarooni</h2>
          <h2 className="stat-title"><span class="golden">Guinness</span> World <span class="golden">Record Holder</span></h2>
        </div>
        <div className="stat-card">
          <div className="card-img">
            <img
              src="/album1.jpg"
              alt="Suhail Mohammed Al Zarooni"
              className="card-img"
            />
          </div>
          <div className="card-content">
            <h4>Album of Excellency Visit in Pakistan</h4>
            <p>
              Actor, director, producer, and screenwriter Usman Peerzada was
              joined by His Excellency Suhail Mohammed Al Zarooni!
            </p>
          </div>
        </div>
        <div className="stats-row">
          <div className="col">
            <h4>1</h4>
            <p>World Record Holder</p>
          </div>
          <div className="col">
            <h4>45</h4>
            <p>National Awards</p>
          </div>
          <div className="col">
            <h4>10K+</h4>
            <p>Followers on Social Media</p>
          </div>
        </div>
      </div>
      <div className="right-section">
        <img
          src="/zarooni.png"
          alt="Suhail Mohammed Al Zarooni"
          className="right-img"
        />
      </div>
    </div>
    <div className="section-container">
      <div class="Left-card">
      <div className="card">
        <p className="card-text">
          Actor, director, producer, and screenwriter Usman Peerzada of Pakistan
          was summoned by His Excellency Suhail Mohammed Al Zarooni!
        </p>
      </div>
      <div>
      <img
          src="/album3.jpg"
          alt="Person 1"
          className="card-image"
        />
      </div>
      </div>

      <div className="Middle-card">
        <img
          src="/album4.png"
          alt="Person 2"
          className="middle"
        />
      </div>
<div className="right-card">
      <div>
      <img
          src="/album2.jpg"
          alt="Person 3"
          className="card-image"
        />
      </div>
      <div className="cardr">
        <p className="card-text">
          It appears that Mr. Kashif Anwar, the President of the Lahore Chamber
          of Commerce & Industry...
        </p>
      </div>
</div>
</div>
<div class="Card-Section">
  <div class="section-row">
  <div>
      <img
          src="/1.png"
          alt="Person 3"
        />
      </div>
      <div>
      <img
          src="/2.png"
          alt="Person 3"
        />
        <div class="card-title">His Excellency in Pakistan</div>
      </div>
      <div>
      <img
          src="/1.png"
          alt="Person 3"
        />
      </div>
      <div>
      <img
          src="/2.png"
          alt="Person 3"
        />
        <div class="card-title">His Excellency in Pakistan</div>
      </div>
      <div>
      <img
          src="/1.png"
          alt="Person 3"
        />
      </div>
      <div>
      <img
          src="/2.png"
          alt="Person 3"
        />
                <div class="card-title">His Excellency in Pakistan</div>
      </div>

  </div>
  <div class="section-row">
  <div>
      <img
          src="/2.png"
          alt="Person 3"
        />
              <div class="card-title">His Excellency in Pakistan</div>
      </div>
      <div>
      <img
          src="/1.png"
          alt="Person 3"
        />
      </div>
      <div>
      <img
          src="/2.png"
          alt="Person 3"
        />
              <div class="card-title">His Excellency in Pakistan</div>
      </div>
      <div>
      <img
          src="/1.png"
          alt="Person 3"
        />
      </div>
      <div>
      <img
          src="/2.png"
          alt="Person 3"
        />
        <div class="card-title">His Excellency in Pakistan</div>
      </div>
      <div>
      <img
          src="/1.png"
          alt="Person 3"
        />
      </div>

  </div>

</div>
<div className="carousel-img-section">
  <h2 class="media-title">Zarooni's Social Media</h2>
  <div className="carousel">
    <button className="carousel-button prev" onClick={handlePrev}>
      &#8249;
    </button>
    <div className="carousel-images">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`carousel-image ${
            index === currentIndex
              ? 'active'
              : index === (currentIndex + 1) % images.length
              ? 'next'
              : index === (currentIndex - 1 + images.length) % images.length
              ? 'prev'
              : ''
          }`}
        />
      ))}
    </div>
    <button className="carousel-button next" onClick={handleNext}>
      &#8250;
    </button>
  </div>
  <div className="carousel-indicators">
    {images.map((_, index) => (
      <span
        key={index}
        className={index === currentIndex ? 'active' : ''}
        onClick={() => setCurrentIndex(index)}
      ></span>
    ))}
  </div>
</div>

    <div className="subscribe-section">
      <button className="subscribe-button">SUBSCRIBE</button>
      <p className="subscribe-text">Subscribe Newsletter to stay updated</p>
    </div>
    <footer className="footer-section">
      <div className="footer-content">
        {/* Left Column */}
        <div className="footer-column">
          <h3 className="footer-title">Suhail Al Zarooni</h3>
          <p className="footer-description">
            A brief description about the celebrity goes here. It can include their achievements, career highlights, or other interesting facts.
          </p>
        </div>

        {/* Middle Column */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#foundation">Foundation</a></li>
            <li><a href="#museum">Museum</a></li>
            <li><a href="#collection">Collection</a></li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="footer-column">
  <h4 className="footer-heading">Follow Us</h4>
  <div className="footer-socials">
    <a href="#twitter" className="social-icon">
      <img src="/3.png" alt="Twitter" />
    </a>
    <a href="#facebook" className="social-icon">
      <img src="/4.png" alt="Facebook" />
    </a>
    <a href="#youtube" className="social-icon">
      <img src="/5.png" alt="YouTube" />
    </a>
    <a href="#whatsapp" className="social-icon">
      <img src="/6.png" alt="WhatsApp" />
    </a>
  </div>

</div>

      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>©2024 Copy Right Reserved</p>
        <p>Leopard Leads IT Solutions</p>
      </div>
    </footer>
</div>
  );
}

export default App;
