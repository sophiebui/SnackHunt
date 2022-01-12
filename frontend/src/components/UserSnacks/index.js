import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSnacks } from '../../store/snacks';
import './UserSnacks.css';
import EditModal from '../EditModal';


const UserSnacks = () => {
	const { ownerId } = useParams();
	const currentId = ownerId;
    const sessionUser = useSelector(state => state.session.user);
	const dispatch = useDispatch();
	const snacksObject = useSelector((state) => state.snacks.entries);
	const snacks = Object.values(snacksObject);

	// let ownerId;
    // if (sessionUser) {
    //   ownerId = sessionUser.id
    // }

	let sessionLinks;
	if (sessionUser) {
	  sessionLinks = (
		  <EditModal />
		  /* <DeleteModal /> */
	  );
	  } else {
		  sessionLinks = (
			  <>
			  <h3>Please log in</h3>
		</>
	  );
	}

	const userSnackArr = [];
	snacks.map(({ id, ownerId, title, imageUrl, description }) => {
		if (ownerId === +currentId) {
			userSnackArr.push({ title, imageUrl, description });
		}
		return userSnackArr;

});

	useEffect(
		() => {
			dispatch(getUserSnacks(ownerId));
		},
		[ ownerId ]
	);


	return (
		<div>
			<ul>
				<div>
					{/* {currentId ? <h1>Your Snacks</h1> : <h1>Please log in</h1>} */}
					<h1>Your Snacks</h1>
					{userSnackArr.map(({ id, title, imageUrl, description }) => (
						<li key={id} className="snack-container">
							<div className="snack-img-container">
								<img className="snack-list-img" src={imageUrl} alt={title} />
							</div>
							<div>
								<h2>{title}</h2>
								<p>{description}</p>
								{sessionLinks}
                                {/* <button className='edit-button'>Edit</button>
                                <button className='delete-button'>Delete</button> */}
							</div>
						</li>
					))}
				</div>
			</ul>
		</div>
	);
};

export default UserSnacks;
