import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSnack } from '../../store/snacks';


function DeleteForm({id}) {
    const dispatch = useDispatch();
    const snacksObject = useSelector((state) => state.snacks.entries);
	const snacks = Object.values(snacksObject);

    // const id = snacks[0].id
    // console.log(id)

    const handleSubmit = (e) => {

        e.preventDefault();
        return dispatch(deleteSnack(id))
        .then((res) => <Redirect to='/'/>)
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
