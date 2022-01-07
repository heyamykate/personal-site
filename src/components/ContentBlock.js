import React from 'react'

export default function ContentBlock({ light = true, children }) {
	const theme = light ? 'content-block' : 'content-block dark';

	return (
		<div className={theme}>
			<div className="inner-content">
				{children}
			</div>
		</div>
	)
}
