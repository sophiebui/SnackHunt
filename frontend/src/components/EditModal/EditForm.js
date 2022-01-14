import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSnack } from '../../store/snacks';

import './EditForm.css';

function EditForm({ setShowModal, id, snack }) {
	const dispatch = useDispatch();

	const sessionUser = useSelector((state) => state.session.user);
	const [ title, setTitle ] = useState(snack.title);
	const [ imageUrl, setImageUrl ] = useState(snack.imageUrl);
	const [ description, setDescription ] = useState(snack.description);
	const [ validationErrors, setValidationErrors ] = useState([]);
	const errors = [];

	useEffect(
		() => {
			if (!title) errors.push('Please provide a name for your snack');
			if (!imageUrl) errors.push('Please provide a url for your photo');
			if(!description) errors.push('Please provide a description for your snack')
			if (description.length > 300) errors.push('Description must be less than 300');
			setValidationErrors(errors);
		},
		[ title, imageUrl, description ]
	);

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
	};


	return (
		<form className="edit-form" onSubmit={handleSubmit}>
			<div className="edit-div">
				<h2 className="h2-edit">EDIT YOUR SNACK:</h2>
				<ul className="edit-errors">
					{validationErrors.length > 0 &&
						validationErrors.map((error) => (
							<li className="errors" key={error}>
								{error}
							</li>
						))}
				</ul>
				<label className="edit-label">
					Name of Snack:
					<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
				</label>
				<label className="edit-label">
					Image URL:
					<input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
				</label>
				<label className="edit-label">
					Description:
					<textarea
						maxLength="301"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
				</label>
				<button className="edit-button" disabled={validationErrors.length > 0} type="submit">
					Submit
				</button>
			</div>
		</form>
	);
}

export default EditForm;
