import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSnacks } from '../../store/snacks';

const SnackList = () => {
	const dispatch = useDispatch();

	const snacksObject = useSelector((state) => state.snacks.entries);
	const snacks = Object.values(snacksObject)

	useEffect(
		() => {
			dispatch(getAllSnacks());
        },[ dispatch ]);

	return (
		<div>
			<ul>
				{snacks.map(({ id, title, imageUrl, description}) => (
					<div key={id}>
                        <h2>{title}</h2>
						<img src={imageUrl} alt={title} />
					</div>
				))}
			</ul>
		</div>
	);
};

export default SnackList;
