import React from 'react'
import Skills from './skills';
import {getLogos} from '../../utils';
import data from '../../data/aboutme.json';
import './aboutMe.scss'

export default function aboutMe() {
	return (
		<div className="aboutMe" >
			<div className="bio" >
				{data.bio}
			</div>
			<div className="profile">
				{/* <img src="profile.jpg" alt="profile" /> */}
			</div>
			<div className="links">
				{data.links.map((link) => getLogos(link))}
				{/* <a href={data.links.Github}><i class="lni lni-github-original"></i></a>
				<a href={data.links.LinkedIn}><i class="lni lni-linkedin-original"></i></a>
				<a href={data.links.Kaggle}>Kaggle</a> */}
			</div>
			<div className="skills">
				<Skills skills={data.skills} />
			</div>
			<div className="languages">
				
			</div>
			<div className="hobbies">

			</div>
		</div>
	)
}
