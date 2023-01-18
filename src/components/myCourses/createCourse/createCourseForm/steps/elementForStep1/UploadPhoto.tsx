/** @format */

import React from 'react'
import { useActions } from '../../../../../../hooks/useActions'
import { useAppSelector } from '../../../../../../hooks/useReduxHooks'
import FieldUploadFoto from '../../../../../../ui/fields/FieldUploadFoto'
import LayoutForComponent from '../../../../../../ui/layout/LayoutForComponent'
import LabelForField from './LabelForField'

interface Props {}

const UploadPhoto = (props: Props) => {
  const { percent, uploadDataPhoto, uploadDataVideo } = useAppSelector(
    (state) => state.createCourseSlice
  )
  const { saveUploadDataPhoto, saveUploadDataVideo, uploadPercent } =
    useActions()

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
              <div className='rounded-xl'>
                <img src={uploadDataPhoto.path} alt='photoCreateCourse' />
              </div>
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
      </div>
      <div className='w-[45%]'>
        <LabelForField label='promotionalVideo' />

        <LayoutForComponent>
          {uploadDataVideo.path ? (
            <div className='rounded-xl'>
              <video width='750' height='500' controls>
                <source src={uploadDataVideo.path} type='video/mp4' />
              </video>
            </div>
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
      </div>
    </div>
  )
}

export default UploadPhoto
