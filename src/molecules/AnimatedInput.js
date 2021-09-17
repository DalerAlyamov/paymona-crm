import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import styles from '../scss/molecules/AnimatedInput.module.scss'
import { AnimatedInputEye, AnimatedInputPlaceholder } from '../atoms'

const AnimatedInput = ({
  className='',
  placeholder='',
  width=380,
  error=false,
  autoWidth=false,
  value='',
  initialFocusing=false,
  isPassword,
  setValue = () => {},
  onFocus = () => {},
  onBlur = () => {},
  onKeyPress = () => {}
}) => {

  const [isFocus, setIsFocus] = useState('')

  const [textVisibility, setTextVisibility] = useState(!isPassword)

  const input = useRef(null)

  const handleFocus = e => {
    setIsFocus(true)
    onFocus(e)
  }

  const handleBlur = e => {
    onBlur(e)
    setIsFocus(false)
  }

  const handleKeyPress = e => {
    if (e.code === 'Enter')
      input.current.blur()
    onKeyPress(e)
  }

  useEffect(() => {
    if (initialFocusing)
      input.current.focus()
    else
      input.current.blur()
  }, [initialFocusing])

  return (
    <div 
      className={classNames(
        className, 
        styles.root,
        error && styles.error
      )}
      style={{ width: autoWidth ? '100%' : 'auto' }}
    >

      <AnimatedInputPlaceholder active={isFocus || value.trim() !== ''} error={error}>
        {placeholder}
      </AnimatedInputPlaceholder>

      <input
        ref={input}
        type={textVisibility ? 'text' : 'password'}
        className={classNames(styles.input, (isFocus || value.trim()) && styles.input_active)}
        style={{ width: autoWidth ? '100%' : width+'px' }}
        value={value}
        onChange={e => setValue(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress}
      />

      {isPassword &&
        <AnimatedInputEye 
          onClick={() => setTextVisibility(!textVisibility)}
          visibility={textVisibility}
        />
      }
      
    </div>
  )
}

export default AnimatedInput
