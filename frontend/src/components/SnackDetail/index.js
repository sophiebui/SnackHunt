import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import './SnackDetail.css';

const SnackDetail = () => {
	const sessionSnacks = useSelector((state) => state.snacks);
	const snackArr = Object.values(sessionSnacks.entries);
	const { snackId } = useParams();

	let specificSnack = [];
	snackArr.map((snack) => {
		if (+snackId === snack.id) {
			specificSnack.push(snack);
		}
	});

	return (
		<>
			{specificSnack.map((snack) => (
				<li key={snack.id} className="snack-detail-container">
					<div className="snack-detail-img-container">
						<img className="snack-detail-img" src={snack.imageUrl} alt={snack.title} />
					</div>
					<div>
						<h2>{snack.title}</h2>
						<p>{snack.description}</p>
					</div>
				</li>
			))}
		</>
	);
};

export default SnackDetail;
