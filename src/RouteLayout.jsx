import { Outlet, useNavigate, useNavigation } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Spinner from './components/Spinner';
import { useEffect } from 'react';

function RootLayout() {
	const { state } = useNavigation();

	const navigate = useNavigate();

	useEffect(() => {
		navigate('/posts');
	}, []);

	return (
		<>
			<MainHeader />
			{state === 'loading' ? <Spinner /> : <Outlet />}
		</>
	);
}

export default RootLayout;
