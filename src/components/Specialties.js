import React from 'react'
import ContentBlock from './ContentBlock';

export default function Specialities() {
	return (
		<ContentBlock>
			<div className='row'>
				<div className="col">
					<h3>Specialities</h3>
				</div>
				<div className='col'>
					<div className='row'>
						<div className='col'>
							<p>Full-stack Programming</p>
							<p>Mentoring</p>
							<p>Public Speaking</p>
							<p>Strategy</p>
						</div>
						<div className='col'>
							<p>Tidy, Readable Code</p>
							<p>Debugging</p>
							<p>Crossword Puzzles</p>
							<p>Pixel Perfect Pages</p>
						</div>
					</div>
				</div>
			</div>
		</ContentBlock>
	)
}
