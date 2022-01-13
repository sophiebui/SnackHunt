import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {updateSnack} from '../../store/snacks';
import { useHistory } from 'react-router-dom';

import './EditForm.css';

function EditForm({ setShowModal, id, snack, ownerId }) {
	const dispatch = useDispatch();
	// const history = useHistory()
	const sessionUser = useSelector((state) => state.session.user);
	const [ title, setTitle ] = useState(snack.title);
	const [ imageUrl, setImageUrl ] = useState(snack.imageUrl);
	const [ description, setDescription ] = useState(snack.description);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const payload = {
			id,
			ownerId: sessionUser.id,
			title,
			imageUrl,
			description
		};

		await dispatch(updateSnack(payload));
		setShowModal(false);
		// history.push(`/${ownerId}`)
	};

	return (
		<form className="edit-form" onSubmit={handleSubmit}>
			<div className="edit-div">
				<h2 className="h2-edit">EDIT YOUR SNACK:</h2>
				<label className="edit-label">
					Name of Snack:
					<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
				</label>
				<label className="edit-label">
					Image URL:
					<input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
				</label>
				<label className="edit-label">
					Description
					<textarea maxLength="250" value={description} onChange={(e) => setDescription(e.target.value)} />
				</label>
				<button className="edit-button" type="submit">
					Submit
				</button>
			</div>
		</form>
	);
}

export default EditForm;
