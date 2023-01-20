/** @format */

import React from 'react'
import { useTranslation } from 'react-i18next'
import { useActions } from '../../../../../../hooks/useActions'
import { useAppSelector } from '../../../../../../hooks/useReduxHooks'
import FieldUploadFoto from '../../../../../../ui/fields/FieldUploadFoto'
import LayoutForComponent from '../../../../../../ui/layout/LayoutForComponent'
import LabelForField from './LabelForField'
import SmallCardForImageVideo from './SmallCardForImageVideo'
import styles from './Step1.module.scss'

interface Props {
  errorPhoto: boolean

  errorVideo: boolean
}

const UploadPhoto = ({ errorPhoto, errorVideo }: Props) => {
  const { percent, uploadDataPhoto, uploadDataVideo } = useAppSelector(
    (state) => state.createCourseSlice
  )
  const { saveUploadDataPhoto, saveUploadDataVideo, uploadPercent } =
    useActions()

  const { t } = useTranslation('myCourses')

  return (
    <div
      className='flex justify-around
    	w-full'
    >
      <div className='w-[45%]'>
        <LabelForField label='coverPhoto' />

        <LayoutForComponent>
          <div className='w-[100%]'>
            {uploadDataPhoto.path ? (
              <SmallCardForImageVideo type='photo' file={uploadDataPhoto} />
            ) : (
              <FieldUploadFoto
                folder='coverPhoto'
                onChange={(val) => {
                  console.log('val', val)
                  saveUploadDataPhoto(val)
                }}
              />
            )}
          </div>
        </LayoutForComponent>
        {errorPhoto && <div className={styles.error}>{t('addPhoto')}</div>}
      </div>
      <div className='w-[45%]'>
        <LabelForField label='promotionalVideo' />

        <LayoutForComponent>
          {uploadDataVideo.path ? (
            <SmallCardForImageVideo type='video' file={uploadDataVideo} />
          ) : (
            <div onKeyDown={(e) => console.log(e)}>
              <FieldUploadFoto
                folder='promotionalVideos'
                onChange={(val) => {
                  saveUploadDataVideo(val)
                }}
                setValue={(el) => {
                  console.log(el)
                  uploadPercent(el)
                }}
              />
            </div>
          )}
        </LayoutForComponent>
        {errorVideo && <div className={styles.error}>{t('addVideo')}</div>}
      </div>
    </div>
  )
}

export default UploadPhoto
