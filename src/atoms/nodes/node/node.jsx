import React from 'react'
import styles from './node.module.css'

export default function Node(props) {

  return (
    <div className={props.className}>
        {props.text}
    </div>
  )
}
