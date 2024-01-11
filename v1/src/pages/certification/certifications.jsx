import React from 'react'
import Card from './certificateCard';
import data from '../../data/certification.json';
import './certifications.scss'

export default function certifications() {
	return (
		<div>
			<div>
      <div className="Certification">
        {data.map((cert) => (
          <Card data={cert} />
        ))}
      </div>
    </div>
		</div>
	)
}
