import httpService from '../services/http.service';

export default async function postsLoaderHelper() {
	return await httpService().receivePosts();
}
