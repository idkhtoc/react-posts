import { redirect } from 'react-router-dom';
import httpService from '../services/http.service';

export default async function addPostActionHelper({ request }) {
	const formData = await request.formData();
	const postData = Object.fromEntries(formData);

	await httpService().sendPost(postData);

	return redirect('/posts');
}
