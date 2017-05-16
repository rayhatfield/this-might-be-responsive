import React from 'react';

export default function Form () {
	return (
		<div className="upload-form">
			<input type="file" accept="image/*;capture=camera" />
		</div>
	);
}
