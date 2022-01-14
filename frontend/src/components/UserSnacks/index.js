import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSnacks } from '../../store/snacks';
import '../SnackList/SnackList.css';
import EditModal from '../EditModal';
import DeleteModal from '../DeleteModal';

const UserSnacks = () => {
	const dispatch = useDispatch();
	const { ownerId } = useParams();
	const sessionUser = useSelector((state) => state.session.user);
	const sessionSnacks = useSelector(state => state.snacks)
	const userSnackArr = Object.values(sessionSnacks.userSnacks)

	useEffect(
		() => {
			dispatch(getUserSnacks(ownerId));
		},
		[ dispatch, ownerId ]
	);

	return (
		<div>
			<ul>
				{!sessionUser ? (
					<div className='my-snacks-logged-out'>
					<h1 className='logged-out-message-h1'>OH NO! SOMEONE ATE YOUR SNACKS. </h1>
					<div className='cookie-container'>

					<div className='cookie-icon-1'> <i class="fas fa-cookie-bite"/></div>
					<div className='cookie-icon-2'> <i class="fas fa-cookie-bite"/></div>
					<div className='cookie-icon-3'> <i class="fas fa-cookie-bite"/></div>
						</div>
					
					<h2 className='logged-out-message-h2'>Just kidding. Please log in to view your snacks</h2>
					</div>
				) :
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
								<EditModal id={snack.id} ownerId={ownerId} snack={snack}/>
								<DeleteModal id={snack.id} />
							</div>
						</li>
					))}
				</div> }
			</ul>
		</div>
	);
};

export default UserSnacks;
