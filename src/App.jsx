import React from 'react';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">Hope for All</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About Us</a></li>
              <li className="nav-item"><a className="nav-link" href="#volunteer">Volunteer</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="bg-light py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Welcome to Hope for All</h1>
          <p className="lead">
            Together we can make a difference. Join our mission to help those in need.
          </p>
          <a href="#volunteer" className="btn btn-success btn-lg">Become a Volunteer</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <img
                src="larm-rmah-AEaTUnvneik-unsplash.jpg"
                className="img-fluid rounded shadow"
                alt="About Us"
              />
     


            </div>
            <div className="col-md-6">
              <p>
                Hope for All is a non-profit organization dedicated to improving lives through education, healthcare, and community support. We believe in equality, kindness, and empowerment, working tirelessly to ensure that every individual has the opportunity to live with dignity and hope. Our volunteers, supporters, and donors are the driving force behind every initiative, making change possible one step at a time.
              </p>
              <p>
                Since our founding in 2010, we've impacted thousands of lives by
                organizing food drives, health camps, and literacy programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section id="volunteer" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Volunteer With Us</h2>
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <select className="form-select" required>
                  <option value="">Select Area of Interest</option>
                  <option>Teaching</option>
                  <option>Medical Aid</option>
                  <option>Fundraising</option>
                  <option>Event Management</option>
                </select>
              </div>
              <div className="col-12 mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Why do you want to volunteer?"
                  required
                ></textarea>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn btn-success btn-lg">
                  Submit Application
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-success text-white text-center py-3 mt-4">
        <div className="container">
          <p className="mb-0">&copy; 2025 Hope for All NGO. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
