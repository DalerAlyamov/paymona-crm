import React from 'react'
import { Button } from '../atoms'
import { Wrap } from '../organisms'
import { closePopup } from '../redux/actions/popupActions'

const FooterPanelInPopup = () => {

  const dispatch = useDispatch()

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
