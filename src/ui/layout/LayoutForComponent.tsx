/** @format */

import { useAppSelector } from '../../hooks/useReduxHooks'
import styles from './LayoutForComponent.module.scss'
import cn from 'classnames'

interface Props {
  children: React.ReactNode
  small?: boolean
}

const LayoutForComponent = ({ children, small = false }: Props) => {
  const { themeDark } = useAppSelector(state => state.authSlice)

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
