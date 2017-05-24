export const LOAD_DISCUSSIONS = 'LOAD_DISCUSSIONS';
export const REQUEST_DISCUSSIONS = 'REQUEST_DISCUSSIONS';
export const RECEIVE_DISCUSSIONS = 'RECEIVE_DISCUSSIONS';
export const REQUEST_THREAD = 'REQUEST_THREAD';
export const RECEIVE_THREAD = 'RECEIVE_THREAD';
export const POST_COMMENT_START = 'POST_COMMENT_START';
export const POST_COMMENT_COMPLETE = 'POST_COMMENT_COMPLETE';

const HANDLERS = {
	REQUEST_DISCUSSIONS: function(state = {}) {
		return {
			...state,
			loading: true
		};
	},

	RECEIVE_DISCUSSIONS: function (state = {}, {payload = []}) {
		return {
			...state,
			loading: false,
			topics: payload
		};
	},

	REQUEST_THREAD: function(state = {}) {
		return {
			...state,
			loading: true
		};
	},

	RECEIVE_THREAD: function (state = {}, {id, payload = []}) {
		return {
			...state,
			loading: false,
			commentsByThreadId: {
				...state.commentsByThreadId,
				[id]: payload
			}
		};
	},

	POST_COMMENT_START: function(state = {}) {
		return {
			...state,
			loading: true
		};
	},

	POST_COMMENT_COMPLETE: function (state = {}, {threadid, payload}) {
		const {commentsByThreadId = {}} = state;
		commentsByThreadId[threadid] = [...commentsByThreadId[threadid] || [], payload];

		return {
			...state,
			loading: false,
			commentsByThreadId
		};
	}
};

export default function reducer (state = {}, action) {
	const handler = HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
