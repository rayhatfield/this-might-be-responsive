export const LOAD_DISCUSSIONS = 'LOAD_DISCUSSIONS';
export const REQUEST_DISCUSSIONS = 'REQUEST_DISCUSSIONS';
export const RECEIVE_DISCUSSIONS = 'RECEIVE_DISCUSSIONS';

const HANDLERS = {
	REQUEST_DISCUSSIONS: function(state) {
		return {
			...state,
			loading: true
		};
	},

	RECEIVE_DISCUSSIONS: function (state, {payload = []}) {
		return {
			...state,
			loading: false,
			items: payload
		};
	}
};

export default function reducer (state = {}, action) {
	const handler = HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
