import React from 'react';
import './Signup.css'; // Import the CSS file for styling

const Signup = () => {
    return (
        <div className="signup-page">
            <div className="form-container">
                <h2>Create an Account</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" name="email" placeholder="Enter your email address" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <div className="image-container ">
                <img src="https://images.pexels.com/photos/2336676/pexels-photo-2336676.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Signup" />
            </div>
        </div>
    );
}

export default Signup;
