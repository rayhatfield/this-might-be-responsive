import Client from 'tmbo-client';

export default function getClient() {
	if (!getClient.instance) {
		getClient.instance = new Client({
			endpoint: 'https://thismight.be/offensive/api.php/'
		});
	}
	return getClient.instance;
}
