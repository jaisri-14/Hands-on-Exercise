import React from "react";

// Home Component
function Home() {
  return (
    <div>
      <h2>Welcome to the Home page of Student Management Portal</h2>
    </div>
  );
}

// About Component
function About() {
  return (
    <div>
      <h2>Welcome to the About page of the Student Management Portal</h2>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div>
      <h2>Welcome to the Contact page of the Student Management Portal</h2>
    </div>
  );
}

// Main Ex2 Component (renders all)
function Ex2() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default Ex2;