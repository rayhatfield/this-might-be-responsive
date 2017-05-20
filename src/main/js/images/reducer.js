import {getClient} from 'utils';

export const LOAD_IMAGES = 'LOAD_IMAGES';
export const REQUEST_IMAGES = 'REQUEST_IMAGES';
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';

const HANDLERS = {
	REQUEST_IMAGES: function(state) {
		return {
			...state,
			loading: true
		};
	},

	RECEIVE_IMAGES: function (state, {payload = []}) {
		const client = getClient();

		return {
			...state,
			loading: false,
			items: payload.map( item => ({
				...item,
				link_file: client.resolve(item.link_file),
				link_thumb: client.resolve(item.link_thumb)
			}))
		};
	}
};

export default function reducer (state = {}, action) {
	const handler = HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
