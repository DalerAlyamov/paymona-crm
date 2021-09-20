import React from 'react'
import { Button } from 'semantic-ui-react'

const FooterPanelInPopup = () => {
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
