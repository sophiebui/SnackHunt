import { csrfFetch } from './csrf';

const GET_SNACKS = 'snacks/GET_SNACKS';
const CREATE_SNACK = 'snacks/CREATE_SNACK';
const REMOVE_SNACK = 'snacks/DELETE_SNACK';
const GET_USER_SNACKS = '/snacks/GET_USER_SNACKS';
const UPDATE_SNACK = '/snacks/UPDATE_SNACK';

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

const getSpecificSnacks = (snacks) => {
	return {
		type: GET_USER_SNACKS,
		snacks
	};
};

export const editSnack = (snack) => {
	return {
		type: UPDATE_SNACK,
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
	const response = await csrfFetch('/api/snacks/new', {
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


export const getUserSnacks = (ownerId) => async (dispatch) => {
	const response = await fetch(`/api/snacks/${ownerId}`);

	if (response.ok) {
		const userSnacks = await response.json();
		dispatch(getSpecificSnacks(userSnacks))
	}
};

export const deleteSnack = (id) => async (dispatch) => {
	const response = await csrfFetch(`/api/snacks/${id}`, {
		method: 'DELETE'
	});
	if (response.ok){
		dispatch(removeSnack(id));
		return;
	}
};

export const updateSnack = (snack) => async (dispatch) => {
	const { ownerId, title, imageUrl, description } = snack;
	const response = await csrfFetch(`/api/snacks/${snack.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id: snack.id,
			ownerId,
			title,
			imageUrl,
			description
		})
	});
	if (response.ok) {
		// const data = await response.json();
		dispatch(editSnack(snack));
		return
}
};

const initialState = { entries: {}, userSnacks: {} };

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
			delete newState.userSnacks[action.id];
			newState.entries = { ...newState.entries };
			return newState;

		case GET_USER_SNACKS:
			const allUserSnacks = {}
			action.snacks.forEach(snack => {
				allUserSnacks[snack.id] = snack
			})
			return {
				...state,
				userSnacks: {...allUserSnacks}
			};

		case UPDATE_SNACK:
			newState = { ...state };
			newState.entries = { [action.snack.id]: action.snack, ...newState.entries };
			return newState;

		default:
			return state;
	}
};

export default snacksReducer;
