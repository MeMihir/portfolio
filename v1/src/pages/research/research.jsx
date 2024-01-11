import React from 'react'
import Card from './researchCard'
import data from '../../data/research.json';
import './research.scss'

export default function research() {
	return (
		<div className="Research">
      {data.map((paper) => (
        <Card data={paper} />
      ))}
    </div>
	)
}
