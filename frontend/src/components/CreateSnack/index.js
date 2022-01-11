import React, { useState } from 'react';
import './CreateSnack.css'
const CreateSnack = () => {
	const [ title, setTitle ] = useState('');
	const [ imageUrl, setImageUrl ] = useState('');
	const [ description, setDescription ] = useState('');

	return (
        <form className="create-form">
            <div className="create-div">
                <h2 className="h2-create">SHARE YOUR SNACK:</h2>
                <label className="create-label">
                Name of Snack:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
                </label>
                <label className="create-label">
                Image URL:
                <input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required/>
                </label>
                <label className="create-label">
                Description
                <textarea maxlength="250" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                </label>
                <button className="create-button" type="submit">
                Add Snack!
                </button>
            </div>
        </form>
    )
};

export default CreateSnack;
