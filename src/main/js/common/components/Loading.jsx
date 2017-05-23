import React from 'react';

import ELLIPSIS from '../assets/animated-ellipsis.svg';

export default function Loading () {
	return (
		<div className="loading"><img src={ELLIPSIS} /></div>
	);
}
