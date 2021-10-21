import React from 'react'

export default function proficency(props) {
  const values = [1]*props.values;
  return (
    <div className="Proficiency" >
      <div>{props.label}</div>
      <div>
        {props.values.for}
      </div>
    </div>
  )
}
