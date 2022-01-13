import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteSnack } from '../../store/snacks';


function DeleteForm({id, setShowModal}) {
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        setShowModal(false)
        e.preventDefault();
        <Redirect to='/'/>
        return dispatch(deleteSnack(id))

    }
	return (
		<div>
			<h3>Are you sure you want to delete?</h3>
            <button onClick={handleSubmit}>Yes</button>
            <button>Cancel</button>
		</div>
	);
}

export default DeleteForm;
