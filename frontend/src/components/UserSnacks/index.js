import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSnacks } from '../../store/snacks';
import './UserSnacks.css';

const UserSnacks = () => {
	const { ownerId } = useParams();
	const currentId = ownerId;

	const dispatch = useDispatch();
	const snacksObject = useSelector((state) => state.snacks.entries);
	const snacks = Object.values(snacksObject);

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
					<h1> Your Snacks</h1>
					{userSnackArr.map(({ id, title, imageUrl, description }) => (
						<li key={id} className="snack-container">
							<div className="snack-img-container">
								<img className="snack-list-img" src={imageUrl} alt={title} />
							</div>
							<div>
								<h2>{title}</h2>
								<p>{description}</p>
                                <button className='edit-button'>Edit</button>
                                <button className='delete-button'>Delete</button>
							</div>
						</li>
					))}
				</div>
			</ul>
		</div>
	);
};

export default UserSnacks;
