import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="about-container">
      {/* Hero Image Section */}
      <div className="hero-section">
        <Image
          src="/hero-image.jpg" // Replace with your hero image path
          alt="Hero Banner"
          layout="fill"
          objectFit="cover"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Welcome to MAS Car Rental</h1>
          <p>Your trusted car rental service for seamless journeys.</p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-content">
        <h2 className="section-heading">
          About <span className="highlight">Us</span>
        </h2>
        <p>
          MAS is proud to be the only two-time "Pakistan Consumer Choice Award"
          winner car rental provider in Pakistan.
        </p>
        <p>
          Renting cars in the past was nothing less of a hassle. Traditional
          renting industry called for several rounds finding a car of your
          choice, inconsistent rates, and low quality assurance. MAS is the
          first on-demand car rental service that solves all these problems on a
          single platform.
        </p>

        <h3>What We Do</h3>
        <p>
          MAS’s car-rental services are available at your fingertips online, for
          a more modern and convenient customer experience. Get the car you
          want, at the time you asked for.
        </p>
        <ul>
          <li>Corporate Office Staff</li>
          <li>Tours and Trips</li>
          <li>Weddings</li>
          <li>Families</li>
          <li>Individuals</li>
        </ul>
        <p>
          Our wide range of latest models and well-maintained cars is suited for
          everyone and all occasions. With MAS, you get what you want. We rent
          cars with a chauffeur as well as on a self-drive basis.
        </p>

        <h3>Our Mission</h3>
        <p>
          MAS was established with our primary focus on you, our customers. It
          all began with the notion of evolving the car-rental industry into a
          customer-centric and advanced solution with a fresh, honest approach.
        </p>
        <p>
          Quality being the cornerstone of MAS services is ensured in every
          mile. With your safety and comfort in mind, MAS makes car rental
          simplified for everyone.
        </p>

        <h3>Our Vision</h3>
        <p>
          From an innovative idea that took the car rental industry by storm,
          MAS's vision goes beyond providing car rental services in Karachi.
        </p>
        <p>
          MAS has set new standards of using technology to revolutionize
          traditional services. More than anything, we strive to inspire and
          facilitate more entrepreneurs to take part in this progress.
        </p>
      </div>
    </div>
  );
};

export default About;
