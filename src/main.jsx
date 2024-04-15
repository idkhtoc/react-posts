import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RouteLayout from './RouteLayout';
import NewPost from './components/NewPost';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';

import addPostActionHelper from './helpers/addPostAction.helper';
import postsLoaderHelper from './helpers/postsLoader.helper';

import './index.css';
import postDetailsLoaderHelper from './helpers/postDetailsLoader.helper';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RouteLayout />,
		children: [
			{
				path: '/posts',
				element: <Posts />,
				loader: postsLoaderHelper,
				children: [
					{
						path: '/posts/create-post',
						element: <NewPost />,
						action: addPostActionHelper,
					},
					{
						path: '/posts/:id',
						element: <PostDetails />,
						loader: postDetailsLoaderHelper,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
