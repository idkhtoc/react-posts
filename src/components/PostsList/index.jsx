import classes from './index.module.css';

import Post from '../Post';
import { useLoaderData } from 'react-router-dom';

function PostsList() {
	const posts = useLoaderData();

	const renderPosts = () => {
		if (posts.length === 0)
			return (
				<div className={classes.no_posts}>
					<h2>There are no posts yet(</h2>
					<p>Start adding some!</p>
				</div>
			);

		return (
			<ul className={classes.posts}>
				{posts.map(({ id, ...postData }) => (
					<Post key={id} id={id} {...postData} />
				))}
			</ul>
		);
	};

	return <>{renderPosts()}</>;
}

export default PostsList;
