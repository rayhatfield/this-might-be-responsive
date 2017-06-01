import {getClient} from 'utils';

export const LOAD_IMAGES = 'LOAD_IMAGES';
export const REQUEST_IMAGES = 'REQUEST_IMAGES';
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
export const REQUEST_UPLOAD = 'REQUEST_UPLOAD';
export const RECEIVE_UPLOAD = 'RECEIVE_UPLOAD';

const setLoading = (state) => ({...state, loading: true});

const receive = (state, {payload = []}) => {
	const client = getClient();

	payload = Array.isArray(payload) ? payload : [payload];

	return {
		...state,
		loading: false,
		items: payload.map( item => ({
			...item,
			link_file: item.link_file ? client.resolve(item.link_file) : null,
			link_thumb: item.link_thumb ? client.resolve(item.link_thumb) : null
		}))
	};
};

const HANDLERS = {
	REQUEST_IMAGES: setLoading,
	REQUEST_UPLOAD: setLoading,
	RECEIVE_IMAGES: receive,
	RECEIVE_UPLOAD: receive
};

export default function reducer (state = {}, action) {
	const handler = HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
