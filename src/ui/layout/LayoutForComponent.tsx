/** @format */

import { useAppSelector } from '../../hooks/useReduxHooks'
import styles from './LayoutForComponent.module.scss'
import cn from 'classnames'

interface Props {
  children: React.ReactNode
  small?: boolean
  className?: ''
}

const LayoutForComponent = ({ children, small = false, className }: Props) => {
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)

  return (
    <>
      {!small ? (
        <div className={cn(styles.wrapper, { [styles.dark]: themeDark })}>
          {children}
        </div>
      ) : (
        <div className={cn(styles.wrapper2, { [styles.dark2]: themeDark })}>
          {children}
        </div>
      )}
    </>
  )
}

export default LayoutForComponent
