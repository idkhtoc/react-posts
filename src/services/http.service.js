import config from '../../config';

export default function httpService() {
	const _request = async (
		url,
		method = 'GET',
		body = null,
		headers = { 'Content-Type': 'application/json' }
	) => {
		const response = await fetch(url, { method, body, headers });

		if (!response.ok) {
			throw new Error(
				`Could not fetch ${url}, status: ${response.status}`
			);
		}

		const data = await response.json();

		return data;
	};

	const sendPost = async (postData) => {
		const res = await _request(
			config.BASE_URL,
			'POST',
			JSON.stringify(postData)
		);

		return res;
	};

	const receivePosts = async () => {
		const res = await _request(config.BASE_URL);

		return res.posts;
	};

	const receivePostById = async (id) => {
		const res = await _request(config.BASE_URL + id);

		return res.post;
	};

	return { sendPost, receivePosts, receivePostById };
}
