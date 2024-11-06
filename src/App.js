import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import MovieList from './MovieList';
import BookingForm from './BookingForm';
import Footer from './Footer'; // Import the Footer component
import './App.css';

const App = () => {
  const [movies] = useState([
    { id: 1, title: 'Deadpool & Wolverine', description: 'Description for Movie 1', image: 'https://m.media-amazon.com/images/M/MV5BNzRiMjg0MzUtNTQ1Mi00Y2Q5LWEwM2MtMzUwZDU5NmVjN2NkXkEyXkFqcGc@._V1_.jpg' },
    { id: 2, title: 'Catch me if you can', description: 'Description for Movie 2', image: 'https://play-lh.googleusercontent.com/6mK9SgWCIiSpNLQdYRd337CuExeslxsWq07DylcdCdwlDvvgXEVcZm_4nZSAEFUXrscngzh7S3SPNzThyrI' },
    // Add more movies as needed
  ]);


  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBook = (movie) => {
    setSelectedMovie(movie);
  };

  const handleConfirm = (details) => {
    setBookingDetails(details);
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src="/path/to/your/logo.png" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={
          <>
            <h1>Movie Booking System</h1>
            {!selectedMovie ? (
              <MovieList movies={movies} onBook={handleBook} />
            ) : (
              <BookingForm movie={selectedMovie} onConfirm={handleConfirm} />
            )}
            {bookingDetails && (
              <div>
                <h2>Booking Confirmed</h2>
                <p>Name: {bookingDetails.name}</p>
                <p>Email: {bookingDetails.email}</p>
                <p>Movie: {bookingDetails.movie.title}</p>
              </div>
            )}
          </>
        } />
      </Routes>
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default App;
