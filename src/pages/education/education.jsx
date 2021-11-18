import React from 'react'
import Card from './educationCard'
import data from '../../data/education.json';
import './education.scss'

export default function education() {
	return (
		<div className="Education">
      {data.map((paper) => (
        <Card data={paper} />
      ))}
    </div>
	)
}
