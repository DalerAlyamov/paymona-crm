import React from 'react'
import { Button } from '../atoms'

const FooterPanelInPopup = () => {

  const 

  return (
    <div>
        <Wrap 
        className={styles.added}
        gap={24}>
          <Button
            type='outlined'
            onClick={() => {dispatch(closePopup())}}
          >
            Отмена
          </Button>
          <Button>
            Добавить
          </Button>

        </Wrap>
    </div>
  )
}

export default FooterPanelInPopup
