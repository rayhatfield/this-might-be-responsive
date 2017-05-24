import Client from 'tmbo-client';

export default function getClient () {
	if (!getClient.instance) {
		getClient.instance = new Client({
			endpoint: 'https://thismight.be/offensive/api.php/'
			// endpoint: 'https://tmbo.dev:9090/offensive/api.php/'
		});
	}
	return getClient.instance;
}
