import { csrfFetch } from './csrf';

const GET_SNACKS = 'snacks/GET_SNACKS';
const CREATE_SNACK = 'snacks/CREATE_SNACK';
const REMOVE_SNACK = 'snacks/DELETE_SNACK';
const GET_ONE_SNACK = 'snacks/GET_ONE_SNACK'

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

export const removeSnack = (id) => {
	return {
		type: REMOVE_SNACK,
		id
	};
};

export const getOneSnack = (id) => {
	return {
	  type: GET_ONE_SNACK,
	  id
	};
  }


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

export const getUserSnacks = (ownerId) => async () => {
	const response = await fetch(`/api/snacks/${ownerId}`);

	if (response.ok) {
		const snack = await response.json();
		return snack;
	}
};

export const deleteSnack = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/snacks/${id}`, {
		method: 'DELETE'
	});
	const data = await response.json();
	dispatch(removeSnack(id));
	return data;
};

export const getUserSnack = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/snacks/${id}`);
	const data = await response.json();

	return data;
}

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

		case REMOVE_SNACK:
			newState = { ...state };
			delete newState.entries[action.id];
			newState.entries = { ...newState.entries };
			return newState;

		default:
			return state;
	}
};

export default snacksReducer;
