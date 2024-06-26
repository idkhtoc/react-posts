const fs = require('fs');

// Check if posts.json exists, if not, create it with an empty array.
const dbName = 'posts.json';
const exists = fs.existsSync(dbName);

if (!exists) {
	fs.writeFile(
		dbName,
		JSON.stringify({ posts: [] }),
		(err) => err && console.error(err)
	);
}

async function getStoredPosts() {
	const rawFileContent = await fs.promises.readFile(dbName, {
		encoding: 'utf-8',
	});
	const data = JSON.parse(rawFileContent);
	const storedPosts = data.posts ?? [];

	return storedPosts;
}

function storePosts(posts) {
	return fs.writeFile(
		dbName,
		JSON.stringify({ posts: posts || [] }),
		(err) => err && console.error(err)
	);
}

exports.getStoredPosts = getStoredPosts;
exports.storePosts = storePosts;
