import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSnacks } from '../../store/snacks';
import './SnackList.css';

const SnackList = () => {
	const dispatch = useDispatch();
	const snacksObject = useSelector((state) => state.snacks.entries);
	const snacks = Object.values(snacksObject);

	useEffect(
		() => {
		dispatch(getAllSnacks());
		},
		[ dispatch ]
	);

	return (
		<div>
			<ul>
				<div className="list-container">
					<h1 className="list-container-h1">Explore Snacks</h1>
					{snacks.map(({ id, title, imageUrl, description }) => (
						<Link to={`/snacks/${id}`} key={id}>
							<li key={id} className="snack-container">
								<div className="snack-img-container">
									<img className="snack-list-img" src={imageUrl} alt={title} />
								</div>
								<div>
									<h2>{title}</h2>
									<p>{description}</p>
								</div>
							</li>
						</Link>
					))}
				</div>
			</ul>
		</div>
	);
};

export default SnackList;
