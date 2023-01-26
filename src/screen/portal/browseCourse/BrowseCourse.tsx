import React from 'react'
import SaerchHeader from '../../../components/browseCourses/searchHeader/SaerchHeader'
import ItemCourse from '../../../components/dashboard/my-course/ItemCourse'
import { Item } from '../../../components/dashboard/my-course/MyCourse'
import { Layout } from '../../../components/layout/Layout'
import LayoutForComponent from '../../../ui/layout/LayoutForComponent'

type Props = {}

const BrowseCourse = (props: Props) => {
  return (
    <Layout title='Browse course'>
      <SaerchHeader />
      <div className='flex gap-4'>
        {Item.map((el) => (
          <LayoutForComponent key={el.id}>
            <ItemCourse withRating item={el} />
          </LayoutForComponent>
        ))}
      </div>
    </Layout>
  )
}

export default BrowseCourse
