import React from 'react'
import { api } from '../../../state/api-rtk/api-rtk'
import ItemWithControl from './ItemWithControl/ItemWithControl'
import styles from './CreatedItems.module.scss'

type Props = {}

const CreatedItems = (props: Props) => {
  const { data, isLoading } = api.useGetProfileQuery(null)

  return (
    <div className={styles.container}>
      {data?.createdCourses.map((el) => (
        <div>
          <ItemWithControl course={el} />
        </div>
      ))}
    </div>
  )
}

export default CreatedItems
