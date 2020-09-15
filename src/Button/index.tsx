import React from 'react'
import { IconPlus } from '../SvgIcons'
import { MouseEvent } from 'react'
import styles from './Button.module.scss'

type Props = {
  width?: string
  fixed?: string
  white?: boolean
  icon?: string
  link?: string
  noBorder?: boolean
  classNames?: string
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FunctionComponent<Props> = ({ children, width, fixed, white, icon, link, noBorder, classNames, type, disabled = false, onClick }) => {
  const wrapperClasses = [styles['ff-button__wrapper']]
  fixed && wrapperClasses.push(styles[fixed])
  if (classNames) {
    wrapperClasses.push(classNames)
  }
  const btnClasses = [styles['ff-button__wrapper__button']]
  white && btnClasses.push(styles['ff-button__wrapper__button--white'])
  disabled && btnClasses.push(styles['ff-button__wrapper__button--disabled'])
  noBorder && btnClasses.push(styles['ff-button__wrapper__button--noBorder'])

  const handleClick = (e: any) => {
    if (type !== 'reset' && type !== 'submit') { e.preventDefault() }
    !disabled && onClick && onClick(e)
  }

  return (
    <div className={wrapperClasses.join(' ')}>
      {!link ?
        <button className={btnClasses.join(' ')} style={{ width: width || '100%' }} type={type} onClick={handleClick}>
          <span>{children}</span>
          {icon && icon === 'plus' ? <span className={styles['ff-button__wrapper__button__icon']}><IconPlus width="19px" height="19px" /></span> : null}
        </button> :
          <a href={link} className={styles['ff-button__wrapper__a']}>{children}</a>
        }
    </div>
  )
}

export default Button
