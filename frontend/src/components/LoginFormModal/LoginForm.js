import React, { useState } from 'react';
import sessionReducer, * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';

function LoginForm() {
	const dispatch = useDispatch();
	const [ credential, setCredential ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errors, setErrors ] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors([]);
		return dispatch(sessionActions.login({ credential, password })).catch(async (res) => {
			const data = await res.json();
			if (data && data.errors) setErrors(data.errors);
		});
	};

	const demoUser = (e) => {
		e.preventDefault();
		return dispatch(sessionActions.login({ credential: 'demo@user.io', password: 'password' }));
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="login-form-div">
			<ul className='errors'>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</ul>
				<label className="login-label">
					Username or Email
					<input type="text" value={credential} onChange={(e) => setCredential(e.target.value)} required />
				</label>
				<label className="login-label">
					Password
					<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
				</label>
				<button className='modal-button' type="submit">Log In</button>
				<button className='modal-button' onClick={demoUser}>Demo</button>
			</div>
		</form>
	);
}

export default LoginForm;
