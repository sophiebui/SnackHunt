import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserSnacks } from '../../store/snacks';
import './UserSnacks.css';
import EditModal from '../EditModal';
import DeleteModal from '../DeleteModal';



const UserSnacks = () => {
	const { ownerId } = useParams();
	const currentId = ownerId;
	const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
	const snacksObject = useSelector((state) => state.snacks.entries);
	const snacks = Object.values(snacksObject);
	// const [showSpecificSnack, setShowSpecificSnack] = useState(false);

	let sessionLinks;
	if (sessionUser) {
	  sessionLinks = (
		  <>
		  {/* <SpecificSnack hideForm={()=> setShowSpecificSnack(true)} /> */}
		  <EditModal />
		  {/* <DeleteModal /> */}
		  </>
	  );
	  } else {
		  sessionLinks = (
			  <>
			  <h3>Please log in</h3>
		</>
	  );
	}


	const userSnackArr = [];
	snacks.map((snack) => {
		if (snack.ownerId === +currentId) {
			userSnackArr.push(snack)
		}
		return userSnackArr;

});



	useEffect(
		() => {
			console.log(getUserSnacks)
			dispatch(getUserSnacks(ownerId));

		},
		[ dispatch, ownerId ]
	);


	return (
		<div>
			<ul>
				<div>

					<h1>Your Snacks</h1>
					{userSnackArr.map((snack) => (
						<li key={snack.id} className="snack-container">
							<div className="snack-img-container">
								<img className="snack-list-img" src={snack.imageUrl} alt={snack.title} />
							</div>
							<div>
								<h2>{snack.title}</h2>
								<p>{snack.description}</p>
								{/* {sessionLinks} */}

								<DeleteModal id={snack.id}/>
							</div>
						</li>
					))}
				</div>
			</ul>
		</div>
	);
};

export default UserSnacks;
