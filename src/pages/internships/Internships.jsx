import React from 'react'
import Card from './internshipCard';
import data from '../../data/internship.json';
import './internships.scss';

export default function Internships() {
	return (
		<div>
			<div className="Internships">
      {data.map((internship) => (
        <Card data={internship} />
      ))}
    </div>
		</div>
	)
}
