import React from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/Topbar.module.scss'
import { TopbarUserPanel } from '../molecules'
import { ArrowHadSmallRight } from '../icons' 
import { Wrap } from '.'

const Topbar = ({
  className='',
  title=[]
}) => {
  return (
    <div className={classNames(className, styles.root)}>
        {title.map(item => 
          <Wrap gap={8} flex alignCenter>
            <span className={styles.title}>
              {item}
            </span>
            <span className={styles.arrow}>
              <ArrowHadSmallRight size={20} />
            </span>
          </Wrap>
        )}
      <TopbarUserPanel />
    </div>
  )
}

export default Topbar
