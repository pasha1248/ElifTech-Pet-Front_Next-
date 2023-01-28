import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../../hooks/useReduxHooks'
import LayoutForComponent from '../../../ui/layout/LayoutForComponent'
import { Typography } from '../../../ui/Typography'

type Props = {}

const DescriptionForCourse = (props: Props) => {
  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)
  const { t } = useTranslation('course')
  return (
    <div style={{ color: `${themeDark ? 'lightgray' : ''}` }}>
      <LayoutForComponent>
        <Tabs variant={'line'} colorScheme={'yellow'}>
          <TabList>
            <Tab fontWeight={'semibold'}>{t('owerview')}</Tab>
            <Tab fontWeight={'semibold'}>{t('courseContent')}</Tab>
            <Tab fontWeight={'semibold'}>{t('requirements')}</Tab>
            <Tab fontWeight={'semibold'}>{t('instructors')}</Tab>
            <Tab fontWeight={'semibold'}>{t('instructors')}</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                odit doloremque quas nesciunt qui magni vero quis cumque omnis
                consectetur, voluptate recusandae iste aliquam ab sit
                voluptatibus error est animi!
              </p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </LayoutForComponent>
    </div>
  )
}
6
export default DescriptionForCourse
