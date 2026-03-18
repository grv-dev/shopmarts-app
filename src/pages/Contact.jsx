import React, {useState} from "react";
import handleChange from "react";  
 

function Contact() {
// State to store form data
const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
    });

    const [submitted, setSubmitted] = useState(false);

// Handle form input changes
const handleInputChange = (e) => {
    const { name, value } = e.target; // Get the name and value of the input field
    setFormData( ({
        ...formData,
        [name]: value  //update only the changed field
    }));
};

// Handle form submission
const handleSubmit = (e) => {
    e.preventDefault(); // prevent page load
    console.log("Form submitted:", formData); // Log form data to console (replace with actual submission logic)
    setSubmitted(true); // Set submitted state to true to show confirmation message

// Reset form data after submission
    setFormData({
        name: "",
        email: "",
        message: ""
    });};        



  return (
    <div>
      <h2>Contact Us</h2>
        {!submitted ? (
        <form onSubmit={handleSubmit} style={styles.form}>
        <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

    <label>
            Email:
            <input type="email"
             name="email" 
             value={formData.email}
            onChange={handleChange} required />

    </label>

    <label>
            Message:
            <textarea name="message"
            value={formData.message} 
            onChange={handleChange} 
            required />
    </label>
        <button type="submit">Send Message</button>

    </form>):(
        <p style={{color: "green"}}>
            Thank you for contacting us! We will get back to you shortly.</p>
    )}

    </div>
  );
}

const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "400px", 
        margintop: "20px"
    }
};


export default Contact;
