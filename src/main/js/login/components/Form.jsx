import React from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends React.PureComponent {

	static propTypes = {
		onSubmit: PropTypes.func
	}

	state = {}

	onChange = (e) => {
		const {target: {name, value}} = e;
		this.setState({
			[name]: value
		});
	}

	onSubmit = (e) => {
		const {onSubmit} = this.props;
		e.preventDefault();
		onSubmit({...this.state});
	}

	render () {
		const {username = '', password = ''} = this.state;

		return (
			<form className="login-form" onSubmit={this.onSubmit}>
				<input name="username" value={username} onChange={this.onChange} />
				<input name="password" value={password} type="password" onChange={this.onChange} />
				<button>Go</button>
			</form>
		);
	}
}
