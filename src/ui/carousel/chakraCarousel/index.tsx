import React, { useState, useEffect } from 'react'
import capsFirst from './utils/capsFirst'

import { ChakraProvider, Container } from '@chakra-ui/react'

import ChakraCarousel from './CarouselChakra'
import { ICourse } from '../../../components/dashboard/my-course/MyCourse'
import LayoutForComponent from '../../layout/LayoutForComponent'
import ItemCourse from '../../../components/dashboard/my-course/ItemCourse'

export default function ChakraCarouselMain({ data }: any) {
  return (
    <ChakraProvider>
      <Container
        py={8}
        px={0}
        maxW={{
          base: '100%',
          sm: '35rem',
          md: '43.75rem',
          lg: '57.5rem',
          xl: '75rem',
          xxl: '87.5rem',
        }}
      >
        <ChakraCarousel gap={10}>
          {data?.availableCourses.map((item: ICourse) => (
            <LayoutForComponent key={item.id} small>
              <ItemCourse item={item} forDashboard />
            </LayoutForComponent>
          ))}
        </ChakraCarousel>
      </Container>
    </ChakraProvider>
  )
}
