import { csrfFetch } from './csrf';

const SET_USER_SESSION = 'session/setUserSession';
const REMOVE_USER_SESSION = 'session/removeUserSession';

const defaultState = {
	user: null
};

const setUserSession = (user) => {
	return {
		type: SET_USER_SESSION,
		payload: user
	};
};

const removeUserSession = () => {
	return {
		type: REMOVE_USER_SESSION
	};
};

export const login = (user) => async (dispatch) => {
	const { credential, password } = user;
	const response = await csrfFetch('/api/session', {
		method: 'POST',
		body: JSON.stringify({
			credential,
			password
		})
	});
	if (response.ok) {
		const data = await response.json();
		dispatch(setUserSession(data.user));
		return response;
	}
};

const userSessionReducer = (state = defaultState, action) => {
    let data = action.payload
    let newState;
    switch (action.type) {
      case SET_USER_SESSION:
        newState = Object.assign({}, state);
        newState.user = data;
        return newState;
      case REMOVE_USER_SESSION:
        newState = Object.assign({}, state);
        newState.user = null;
        return newState;
      default:
        return state;
    }
};

export default userSessionReducer;
