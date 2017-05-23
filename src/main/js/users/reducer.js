export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';

const HANDLERS = {
	REQUEST_USER: function(state = {}) {
		return {
			...state,
			loading: true
		};
	},

	RECEIVE_USER: function (state = {byId: {}}, {id, payload}) {
		return {
			...state,
			loading: false,
			byId: {
				...state.byId,
				[id]: payload
			}
		};
	},
};

export default function reducer (state = {}, action) {
	const handler = HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
