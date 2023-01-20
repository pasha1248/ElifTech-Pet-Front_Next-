/** @format */

import React, { FC } from 'react'
// @ts-ignore:next-line
import styles from './Search.module.scss'
import { BiSearchAlt } from 'react-icons/bi'
import { useSearch } from '../../../../hooks/useSearch'
import { useAppSelector } from '../../../../hooks/useReduxHooks'
import cn from 'classnames'

const Search: FC = () => {
  const { data, handleSearch, searchTerm, isSuccess } = useSearch()
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)

  console.log(data)
  return (
    <div className={styles.search_top}>
      <label className={styles.label}>
        <input
          className={cn(styles.input, { [styles.dark]: themeDark })}
          type='text'
          placeholder='search...'
          value={searchTerm}
          onChange={handleSearch}
        />
        <BiSearchAlt
          className={styles.iconSearch}
          color={`${themeDark ? 'white' : '#5c5a69'}`}
          size={24}
        />
      </label>
      {isSuccess && (
        <div className={styles.result}>
          {/* {data?.length ? (
            data.map(item => (
              // <SmallVideoItem isSmall item={item} key={item.id} />
            ))
          ) : (
            <div className='text-white'>Article is not found</div>
          )} */}
        </div>
      )}
    </div>
  )
}

export default Search
