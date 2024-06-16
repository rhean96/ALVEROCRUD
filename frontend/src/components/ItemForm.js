import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (item) {
            setFirstName(item.first_name);
            setMiddleName(item.middle_name);
            setLastName(item.last_name);
            setAddress(item.address);
            setEmail(item.email);
            setPhone(item.phone);
        }
    }, [item]);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            address,
            email,
            phone,
        };
        try {
            if (item) {
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } else {
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div>
                <label>Middle Name:</label>
                <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div>
                <label>Address:</label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
       
};
export default ItemForm;