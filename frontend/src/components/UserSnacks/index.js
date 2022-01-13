import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserSnacks } from '../../store/snacks';
import '../SnackList/SnackList.css';
import EditModal from '../EditModal';
import DeleteModal from '../DeleteModal';

const UserSnacks = () => {
	const { ownerId } = useParams();
	const currentId = ownerId;
	const dispatch = useDispatch();
	const [snacks, setSnacks] = useState(JSON.parse(localStorage.getItem('snacks')))
	//  const json = localStorage.getItem('snacks');
	//   snacks = JSON.parse(json);

	useEffect(
		() => {
			setSnacks(JSON.parse(localStorage.getItem('snacks')))
			dispatch(getUserSnacks(ownerId));

		},
		[ dispatch, ownerId ]
	);

	const userSnackArr = [];
	snacks.map((snack) => {
		if (snack.ownerId === +currentId) {
			userSnackArr.push(snack);
		}
		return userSnackArr;
	});
	return (
		<div>
			<ul>
				<div className="list-container">
					<h1>Your Snacks</h1>
					{userSnackArr.map((snack) => (
						<li key={snack.id} className="snack-container">
							<div className="snack-img-container">
								<img className="snack-list-img" src={snack.imageUrl} alt={snack.title} />
							</div>
							<div>
								<h2>{snack.title}</h2>
								<p>{snack.description}</p>
								<EditModal id={snack.id}/>
								<DeleteModal id={snack.id} />
							</div>
						</li>
					))}
				</div>
			</ul>
		</div>
	);
};

export default UserSnacks;
