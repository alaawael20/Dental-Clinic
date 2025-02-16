import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'
import NavBar from '../../components/Utils/navBar/NavBar'

const NotFound = () => {
  return (
    <>
        <NavBar />
        <div className="not-found-container">
            <h1 className="error-code">404</h1>
            <p className="error-message">Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="home-button">
                Go Back Home
            </Link>
        </div>
    </>
  )
}

export default NotFound
