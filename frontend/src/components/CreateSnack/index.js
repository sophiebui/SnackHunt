import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitNewSnack } from '../../store/snacks';
import { useHistory } from 'react-router-dom';
import './CreateSnack.css'

const CreateSnack = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
	const [ title, setTitle ] = useState('');
	const [ imageUrl, setImageUrl ] = useState('');
	const [ description, setDescription ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ownerId: sessionUser.id,
            title,
            imageUrl,
            description
        }

        const snack = await dispatch(submitNewSnack(payload));
        if (snack) {
            history.push(`/snack/${snack.id}`);
          }
    }
	return (
        <form className="create-form" onSubmit={handleSubmit}>
            <div className="create-div">
                <h2 className="h2-create">SHARE YOUR SNACK</h2>
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
                <textarea maxLength="250" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                </label>
                <button className="create-button" type="submit">
                Add Snack!
                </button>
            </div>
        </form>
    )
};

export default CreateSnack;
