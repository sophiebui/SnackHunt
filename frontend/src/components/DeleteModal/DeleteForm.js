import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSnack } from '../../store/snacks';
import './DeleteForm.css'

function DeleteForm({id, setShowModal}) {
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(deleteSnack(id))
        setShowModal(false)

    }
    const handleCancel = (e) => {
        e.preventDefault()
        setShowModal(false)
    }
	return (
		<div className='delete-button-modal'>
			<h3>Are you sure you want to delete?</h3>
            <div className='delete-buttons-div'>
            <button className='delete-button-yes' onClick={handleSubmit}>Yes</button>
            <button className='delete-button-cancel' onClick={handleCancel}>Cancel</button>

            </div>
		</div>
	);
}

export default DeleteForm;
