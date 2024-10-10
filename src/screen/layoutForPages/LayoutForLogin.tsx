import { FC, PropsWithChildren } from 'react'
import { useAppSelector } from '../../hooks/useReduxHooks'
import styles from './CssForLayouts.module.scss'
import cn from 'classnames'

type Props = {
  children: React.ReactNode
}

const LayoutForLogin: FC<Props> = ({ children }) => {
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)

  return (
    <div className={cn(styles.container, { [styles.dark]: themeDark })}>
        <div className={cn(styles.wrapperSingIn)}>{children}</div>
    </div>
  )
}

export default LayoutForLogin
