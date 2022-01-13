import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteSnack } from '../../store/snacks';


function DeleteForm({id, setShowModal}) {
    const dispatch = useDispatch();
    const history = useHistory()


    const handleSubmit = (e) => {
        setShowModal(false)
        e.preventDefault();
        history.push('/')
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
