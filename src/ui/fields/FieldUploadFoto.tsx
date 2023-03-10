/** @format */

import React, {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useState,
} from 'react'
import { useUploadFile } from '../../hooks/useUploadFile'
import { useDropzone } from 'react-dropzone'
import SmallLoader from '../loaders/small-loader/SmallLoader'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../hooks/useReduxHooks'

export interface IUploadField {
  title?: string
  onChange: (...event: any) => void
  folder?: string
  setValue?: (val: number) => void
  setIsChosen?: Dispatch<SetStateAction<boolean>>
}

const FieldUploadFoto: FC<IUploadField> = ({
  title,
  onChange,
  folder,
  setValue,
  setIsChosen,
}) => {
  const { uploadFile, loading } = useUploadFile(
    onChange,
    folder,
    setValue,
    setIsChosen
  )
  const handlePhotos = (e: any) => {}

  // @ts-ignore
  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }, [])

  const onDrop = (acceptedFiles: any) => {
    uploadFile(acceptedFiles)
  }

  const { themeDark } = useAppSelector((state) => state.changeThemeSlice)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  })

  return (
    <div>
      {loading ? (
        <div className='flex flex-col items-center justify-center w-full h-44 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'>
          <SmallLoader />
        </div>
      ) : (
        <div
          {...getRootProps()}
          className='flex items-center justify-center w-full p-5 hover:opacity-80 dark:hover:bg-slate-400'
        >
          <label
            htmlFor='dropzone-file'
            className='flex flex-col items-center justify-center w-full h-44  border-2  border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
          >
            <>
              <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                <svg
                  aria-hidden='true'
                  className='w-10 h-10 mb-3 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'></path>
                </svg>
                <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                  <span className='font-semibold'>Click to upload</span> or drag
                  and drop
                </p>
                <p className='text-xs text-gray-500 dark:text-gray-400'>
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input {...getInputProps()} id='' multiple type='file' />
            </>
          </label>
        </div>
      )}
    </div>
  )
}

export default FieldUploadFoto
