import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteSnack } from '../../store/snacks';
import './DeleteForm.css'

function DeleteForm({id, setShowModal, ownerId}) {
    const dispatch = useDispatch();
    const history = useHistory()


    const handleSubmit = (e) => {
        setShowModal(false)
        e.preventDefault();
        history.push(`/${ownerId}`)
        return dispatch(deleteSnack(id))

    }
	return (
		<div className='delete-button-modal'>
			<h3>Are you sure you want to delete?</h3>
            <div className='delete-buttons-div'>
            <button className='delete-button-yes' onClick={handleSubmit}>Yes</button>
            <button className='delete-button-cancel'>Cancel</button>

            </div>
		</div>
	);
}

export default DeleteForm;
