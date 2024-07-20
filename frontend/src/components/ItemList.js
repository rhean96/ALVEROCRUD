import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [formData, setFormData] = useState({
        first_name: '',
        middle_name: '',
        last_name: '',
        address: '',
        phonno: '',
        email: '',
        birthday: '',
        birthplace: '',
        age: '',
        gender: '',
        nationality: '',
        civil_status: '',
        religion: '',
        height_CM: '',
        weight_KG: '',
        mother_first_name: '',
        mother_middle_name: '',
        mother_last_name: '',
        mother_occupation: '',
        father_first_name: '',
        father_middle_name: '',
        father_last_name: '',
        father_occupation: '',
        primary: '',
        secondary: '',
        tertiary: '',
    });

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('Error fetching items:', error);
        }
    };

    const deleteItem = async (itemId) => {
        try {
            await axios.delete(`http://localhost:8000/api/items/${itemId}/`);
            fetchItems(); // Refresh the list after deletion
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleEdit = (item) => {
        setEditMode(true);
        setEditItem(item);
        // Populate formData with item's data
        setFormData({
            first_name: item.first_name || '',
            middle_name: item.middle_name || '',
            last_name: item.last_name || '',
            address: item.address || '',
            phone: item.phone || '',
            email: item.email || '',
            birthday: item.birthday || '',
            birthplace: item.birthplace || '',
            age: item.age || '',
            gender: item.gender || '',
            nationality: item.nationality || '',
            civil_status: item.civil_status || '',
            religion: item.religion || '',
            height_CM: item.height_CM || '',
            weight_KG: item.weight_KG || '',
            mother_first_name: item.mother_first_name || '',
            mother_middle_name: item.mother_middle_name || '',
            mother_last_name: item.mother_last_name || '',
            mother_occupation: item.mother_occupation || '',
            father_first_name: item.father_first_name || '',
            father_middle_name: item.father_middle_name || '',
            father_last_name: item.father_last_name || '',
            father_occupation: item.father_occupation || '',
            primary: item.primary || '',
            secondary: item.secondary || '',
            tertiary: item.tertiary || '',
        });
    };

    const cancelEdit = () => {
        setEditMode(false);
        setEditItem(null);
        setFormData({
            first_name: '',
            middle_name: '',
            last_name: '',
            address: '',
            phone: '',
            email: '',
            birthday: '',
            birthplace: '',
            age: '',
            gender: '',
            nationality: '',
            civil_status: '',
            religion: '',
            height_CM: '',
            weight_KG: '',
            mother_first_name: '',
            mother_middle_name: '',
            mother_last_name: '',
            mother_occupation: '',
            father_first_name: '',
            father_middle_name: '',
            father_last_name: '',
            father_occupation: '',
            primary: '',
            secondary: '',
            tertiary: '',
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { id } = editItem;
        try {
            await axios.put(`http://localhost:8000/api/items/${id}/`, formData);
            fetchItems(); // Refresh the list after edit
            cancelEdit(); // Exit edit mode
        } catch (error) {
            console.error('Error editing item:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div>
            <h2>Item List</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <strong>{item.first_name} {item.middle_name} {item.last_name}</strong>
                        <br />
                        Address: {item.address}
                        <br />
                        Phone: {item.phone}
                        <br />
                        Email: {item.email}
                        <br />
                        Birthday: {item.birthday}
                        <br />
                        Birthplace: {item.birthplace}
                        <br />
                        Age: {item.age}
                        <br />
                        Gender: {item.gender}
                        <br />
                        Nationality: {item.nationality}
                        <br />
                        Civil Status: {item.civil_status}
                        <br />
                        Religion: {item.religion}
                        <br />
                        Height: {item.height_CM}
                        <br />
                        Weight: {item.weight_KG}
                        <br />
                        Mother's Name: {item.mother_first_name} {item.mother_middle_name} {item.mother_last_name}
                        <br />
                        Mother's Occupation: {item.mother_occupation}
                        <br />
                        Father's Name: {item.father_first_name} {item.father_middle_name} {item.father_last_name}
                        <br />
                        Father's Occupation: {item.father_occupation}
                        <br />
                        Primary Level: {item.primary}
                        <br />
                        Secondary Level: {item.secondary}
                        <br />
                        Tertiary Level: {item.tertiary}
                        <br />
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            
            {editMode && (
                <form onSubmit={handleSubmit}>
                    {/* Input fields for editing */}
                    <div>
                        <label>First Name:</label>
                        <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Middle Name:</label>
                        <input type="text" name="middle_name" value={formData.middle_name} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Address:</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Contact No.:</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Birthday:</label>
                        <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Place of Birth:</label>
                        <input type="text" name="birthplace" value={formData.birthplace} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Age:</label>
                        <input type="text" name="age" value={formData.age} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Gender:</label>
                        <input type="text" name="gender" value={formData.gender} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Nationality:</label>
                        <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Civil Status:</label>
                        <input type="text" name="civil_status" value={formData.civil_status} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Religion:</label>
                        <input type="text" name="religion" value={formData.religion} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Height:</label>
                        <input type="text" name="height_CM" value={formData.height_CM} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Weight:</label>
                        <input type="text" name="weight_KG" value={formData.weight_KG} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Mother's First Name:</label>
                        <input type="text" name="mother_first_name" value={formData.mother_first_name} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Mother's Middle Name:</label>
                        <input type="text" name="mother_middle_name" value={formData.mother_middle_name} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Mother's Last Name:</label>
                        <input type="text" name="mother_last_name" value={formData.mother_last_name} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Mother's Occupation:</label>
                        <input type="text" name="mother_occupation" value={formData.mother_occupation} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Father's First Name:</label>
                        <input type="text" name="father_first_name" value={formData.father_first_name} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Father's Middle Name:</label>
                        <input type="text" name="father_middle_name" value={formData.father_middle_name} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Father's Last Name:</label>
                        <input type="text" name="father_last_name" value={formData.father_last_name} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Father's Occupation:</label>
                        <input type="text" name="father_occupation" value={formData.father_occupation} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Primary Level:</label>
                        <input type="text" name="primary" value={formData.primary} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Secondary Level:</label>
                        <input type="text" name="secondary" value={formData.secondary} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Tertiary Level:</label>
                        <input type="text" name="tertiary" value={formData.tertiary} onChange={handleChange} />
                    </div>
                    
                    <button type="submit">Save</button>
                    <button type="button" onClick={cancelEdit}>Cancel</button>
                </form>
            )}
        </div>
    );
};

export default ItemList;
