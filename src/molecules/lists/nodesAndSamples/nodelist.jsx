import React from 'react'
import nodelist from './nodes.json'
import sampleslist from './samples.json'
import Node from '../../../atoms/nodes/node/node'
import styles from './nodelist.module.css'

export default function Nodelist(props) {

  return (
      <div className={styles.list}>
          {
            props.type === 'nodes' ?
              nodelist.nodes.map((node) => 
                <Node className={styles.node_in_list} text={node.type} />
              ) :
              sampleslist.nodes.map((node) => 
                <Node className={styles.node_in_list} text={node.type} />
              )
          }
      </div>
  )
}
