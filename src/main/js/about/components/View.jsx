import React from 'react';

import {version, homepage} from '../../../../../package.json'; // is this a terrible idea?

import {getClient} from 'utils';

export default function View () {
	const client = getClient();
	return (
		<div className="about">
			<p><a href={homepage}>this-might-be-responsive</a> version {version}.</p>
			<p>using <a href={client.homepage}>tmbo-client</a> version {client.version}.</p>
		</div>
	);
}
