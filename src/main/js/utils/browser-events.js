import React from 'react';

export function browserEvents (Component, event = 'keydown', callback) {
	return class BrowserEvents extends React.Component {
		componentDidMount () {
			window.addEventListener(event, this.handler);
		}

		componentWillUnmount () {
			window.removeEventListener(event, this.handler);
		}

		handler = (e) => {
			const fn = typeof callback === 'function' ? callback : this.component[callback];
			if (typeof fn === 'function') {
				fn(e, this.component);
			}
		}

		attachRef = x => {
			this.component = x;
		}

		render () {
			return (
				<Component ref={this.attachRef} {...this.props} />
			);
		}
	};
}

export function keydownEvents(Component, callbackName, key) {
	const handler = (e, ref) => (!key || [].concat(key).includes(e.key)) ? ref[callbackName](e) : void 0;
	return browserEvents(Component, 'keydown', handler);
}
