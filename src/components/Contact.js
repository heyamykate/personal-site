import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontAwesome';

export default function Contact() {
	return (
		<div className='content-block'>
			<div className='inner-content'>
				<div className='row'>
					<div className='col'>
						<h3>Get In Touch</h3>
					</div>
					<div className='col'>
						<p>If you'd like help with a project or want to work together, drop me a line at <a href="mailto:amykate.andrews@gmail.com?subject=Hi Amy-Kate">amykate.andrews@gmail.com</a>.</p>
						<br />
						<p>
							<a className='icon' href='https://twitter.com/heyamykate' target='_blank' rel="noreferrer">
								<FontAwesomeIcon icon={['fab', 'twitter-square']} />
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
