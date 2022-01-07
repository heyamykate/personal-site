import React from 'react'
import ContentBlock from './ContentBlock'

export default function Brands() {
	return (
		<ContentBlock light={false}>
			<div className='row'>
				<div className='col'>
					<h3>Brands I've Worked With</h3>
				</div>
				<div className='col'>
					<p>Adidas</p>
					<p>Nike</p>
					<p>Converse</p>
					<p>BYU TV</p>
					<p>Rodeo Austin</p>
					<p>University of Oregon Football</p>
					<p>Ghost Lifestyle</p>
					<p>Project Sunday</p>

					<br />
					<p className='citation'>Project details available upon request.</p>
				</div>
			</div>
		</ContentBlock>
	)
}
