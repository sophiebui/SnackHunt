import { csrfFetch } from './csrf';

const GET_SNACKS = 'snacks/GET_SNACKS';
const CREATE_SNACK = 'snacks/CREATE_SNACK';
// const GET_USER_SNACK = 'snacks/GET_USER_SNACK'

export const getSnacks = (snacks) => {
	return {
		type: GET_SNACKS,
		snacks
	};
};

export const createSnack = (snack) => {
	return {
		type: CREATE_SNACK,
		snack
	};
};

export const getAllSnacks = () => async (dispatch) => {
	const response = await csrfFetch('/api/snacks');
	const data = await response.json();
	dispatch(getSnacks(data.snacks));
};

export const submitNewSnack = (snack) => async (dispatch) => {
	const { ownerId, title, imageUrl, description } = snack;
	const response = await csrfFetch('/api/new', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			ownerId,
			title,
			imageUrl,
			description
		})
	});

	if (response.ok) {
		const data = await response.json();
		dispatch(createSnack(data.snack));
		return data;
	}
};

// export const getUserSnack = (ownerId) => {
// 	return {
// 		type: GET_USER_SNACK,
// 		ownerId
// 	}
// }


export const getUserSnacks = (ownerId) => async (dispatch) => {
	console.log(ownerId);
	const response = await fetch(`/api/snacks/${ownerId}`);
	// const response = await fetch('/:ownerId')

	if (response.ok) {
		const snack = await response.json();
		return snack;
	}
};

const initialState = { entries: {} };

const snacksReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case GET_SNACKS:
			newState = { ...state };
			newState.entries = action.snacks.reduce((entries, snack) => {
				entries[snack.id] = snack;
				return entries;
			}, {});
			return newState;

		case CREATE_SNACK:
			newState = { ...state };
			newState.entries = { [action.snack.id]: action.snack, ...newState.entries };
			return newState;

		default:
			return state;
	}
};

export default snacksReducer;
