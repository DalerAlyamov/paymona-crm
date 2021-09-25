import classNames from 'classnames'
import React from 'react'
import { Wrap } from '../organisms'
import styles from '../scss/molecules/ClientHeaderInfo.module.scss'

const ClientHeaderInfo = ({
  className='',
  logo='',
  title='',
  domain='',
  products=[]
}) => {

  return (
    <div className={classNames(className, styles.root)}>
      
      <div className={styles.logo}>
        <img src={logo} alt="" />
      </div>

      <Wrap flex justifyCenter column gap={16}>

        <span className={styles.subtitle}>
          Наименование
        </span>

        <span className={styles.title}>
          {title}
        </span>

      </Wrap>

      <Wrap flex justifyCenter column gap={16}>

        <span className={styles.subtitle}>
          Доменный адрес
        </span>

        <span className={styles.title}>
          {domain}
        </span>

      </Wrap>

      <Wrap flex column justifyCenter gap={16}>

        <span className={styles.subtitle}>
          Услуги
        </span>

        <Wrap className={styles.products} flex wrap gap={16}>
          
          {products.map(product => 
            <div className={styles.product} key={product}>
              {product}
            </div>  
          )}

        </Wrap>

      </Wrap>

    </div>
  )
}

export default ClientHeaderInfo
