import classNames from 'classnames'
import React from 'react'
import styles from '../scss/molecules/BlocksForSideBar.module.scss'
const BlocksForSideBar = ({
  text,
  content,
  state
}) => {
  return (
    <div className={styles.root}>
      {content}
      <span className={classNames(styles.text, op)}>
        {text}
      </span>
    </div>
  )
}

export default BlocksForSideBar
