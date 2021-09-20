import React from 'react'

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
