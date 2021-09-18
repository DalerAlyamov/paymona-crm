import React from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/Topbar.module.scss'
import { TopbarUserPanel } from '../molecules'
import { ArrowHadSmallRight } from '../icons' 
import { Wrap } from '.'
import { Button } from '../atoms'
import { Link } from 'react-router-dom'

const Topbar = ({
  className='',
  titleList=[]
}) => {
  return (
    <div className={classNames(className, styles.root)}>
      <Wrap flex alignCenter>
        {titleList.map((item, index) =>
          <React.Fragment key={index}>
            <Button 
              small 
              type='text' 
              className={classNames(
                styles.link, 
                index === titleList.length-1 && styles.link__disabled
              )}
            >
              <Link to={item.link} draggable={false}>
                {item.text}
              </Link>
            </Button>
            <span className={styles.arrow}>
              <ArrowHadSmallRight />
            </span>
          </React.Fragment> 
        )}
      </Wrap>
      <TopbarUserPanel />
    </div>
  )
}

export default Topbar
