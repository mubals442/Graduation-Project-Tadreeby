import React, { useState } from 'react';

function UserForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        college: '',
        email: '',
        phoneNumber: '',
        IDNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Success:', data);
            // Handle success here
        } catch (error) {
            console.error('Error:', error);
            // Handle the error here
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            {/* Repeat for other fields */}
            <button type="submit">Submit</button>
        </form>
    );
}

export default UserForm;
