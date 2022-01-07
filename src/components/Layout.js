import React from 'react'

import './typography.css';
import './layout.css';

export default function Layout({ pageTitle, children }) {
	return (
		<div>
			<title>({ pageTitle })</title>
			<main>
				<div className="title">
					<h1 className="headline">Amy-Kate Andrews</h1>
				</div>
				{children}
			</main>
		</div>
	)
}
