import httpService from '../services/http.service';

export default async function postDetailsLoaderHelper({ params }) {
	return await httpService().receivePostById(params.id);
}
