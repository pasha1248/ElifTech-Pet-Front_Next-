/** @format */

import React from 'react'

interface Props {
  item: any
}

const ItemCourse = ({ item }: Props) => {
  return (
    <>
      <div>
        <img src={item.imgItem} alt='' className='rouded-3xl' />
      </div>
      Type
    </>
  )
}

export default ItemCourse
