import React from 'react';
import './Textform.css'; // Import the CSS file

function Textform() {
  return (
    <div className="App">

      <form className="text-form">

        <h1>Contact Us</h1>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>


        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>



        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required />
        </div>


        <button type="submit">Submit</button>

        
      </form>
    </div>
  );
}

export default Textform;
