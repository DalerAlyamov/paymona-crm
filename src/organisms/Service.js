import React, { useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/organisms/Service.module.scss'
import ServiceLabel from '../molecules/ServiceLabel'
import { TableHeaders, TableRow } from '../molecules'
import { TableColumn } from '../atoms'

const Service = ({
  id=0,
  className='',
  title='',
  setData=()=>{},
  headers=[],
  clientList=[],
  initialOpenState=false
}) => {

  
  /* Variables */

  const template = ['1fr', '1fr', '1fr']

  const [open, setOpen] = useState(initialOpenState)

  return (
    <div className={classNames(className, styles.root, open && styles.open)}>
      
      <ServiceLabel setData={setData} id={id} open={open} onClick={() => setOpen(!open)}>
        {title}
      </ServiceLabel>

      {open && 
        <>
          <TableHeaders template={template}>
            {headers.map(col => 
              <TableColumn key={col}>
                {col}
              </TableColumn>  
            )}
          </TableHeaders>

          {!clientList.length &&
            <div className={styles.noneClient}>
              Клиенты пока не подключены...
            </div>
          }

          {clientList.length !==0 && clientList.map((row, index) => 
            <TableRow 
              honest={index % 2 === 0}
              template={template} 
              id={1} 
              key={row.name}
            >
              <TableColumn>
                {row.name}
              </TableColumn>  
              <TableColumn>
                {row.count_of_employees}
              </TableColumn>  
              <TableColumn>
                {row.start}
              </TableColumn>  
            </TableRow>
          )}
        </>
      }

    </div>
  )
}

export default Service
