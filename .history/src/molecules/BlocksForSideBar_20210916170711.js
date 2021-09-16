import classNames from 'classnames'
import React from 'react'
import styles from '../scss/molecules/BlocksForSideBar.module.scss'
const BlocksForSideBar = ({
  text,
  content,
  state
}) => {
  return (
    <div className={classNames(styles.root, state && styles.)}>
      {content}
      <span className={classNames(styles.text, state && styles.hiden)}>
        {text}
      </span>
    </div>
  )
}

export default BlocksForSideBar
