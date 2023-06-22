import React from 'react'
import './buttons.module.css'

export default function NavigationButton(props) {
  return (
    <button onClick={props.onClick}>
        { 
            props.isActive ?
            <span>{props.text}</span> :
            <img src={props.icon}/>
        }
    </button>
  )
}
