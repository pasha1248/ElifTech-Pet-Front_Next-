/** @format */

import React, { FC } from 'react'
import cn from 'classnames'
import styles from './ArticleItem.module.scss'
import { BiEdit, BiTrash } from 'react-icons/bi'
import UserAvatar from '../../../../user.avatar/UserAvatar'
import { useRouter } from 'next/router'
import Link from 'next/link'

const SmallVideoItem: FC<any> = ({ isSmall, removeHandler, item }) => {
  const { push } = useRouter()

  return (
    <div
      className={cn(styles.article_item, {
        [styles.small]: isSmall,
      })}
    >
      <div className={styles.thumbnail}>
        {item?.uploadDataPhoto && (
          <div>
            <img
              src={item.uploadDataPhoto}
              alt={item.name}
              width={185}
              height={103}
            />
            <div className='absolute right-3 -bottom-7'>
              {item?.user?.avatarPath && <UserAvatar user={item.user} />}
            </div>
          </div>
        )}
        {/* {item?.user.avatarPath && (
          <div>
            <img
              src={item?.user.avatarPath}
              alt={item.firstName}
              width={185}
              height={103}
            />
            <UserAvatar user={item} />
          </div>
        )} */}
      </div>

      {/* <div className={styles.information}>
        {!isSmall && (
          <div className={styles.author}>{item.user?.firstName}</div>
        )}
        <Link href={`/course/${item.id}`}>
          <p className={styles.name}>{item.name}</p>
        </Link>
      </div> */}
    </div>
  )
}

export default SmallVideoItem
