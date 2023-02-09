/** @format */

import styles from './LayoutForComponent.module.scss'
import cn from 'classnames'
import classNames from 'classnames'
import { useAppSelector } from '../../../hooks/useReduxHooks'

interface Props {
  children: React.ReactNode
  small?: boolean
  classNames?: string
  style?: React.CSSProperties
}

const LayoutForModalScreen = ({
  children,
  small = false,
  classNames,
  style,
}: Props) => {
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)

  return (
    <>
      {!small ? (
        <div className={classNames}>
          <div
            className={cn(styles.wrapper, {
              [styles.dark]: themeDark,
            })}
            style={style}
          >
            {children}
          </div>
        </div>
      ) : (
        <div className={cn(styles.wrapper2, { [styles.dark2]: themeDark })}>
          {children}
        </div>
      )}
    </>
  )
}

export default LayoutForModalScreen
