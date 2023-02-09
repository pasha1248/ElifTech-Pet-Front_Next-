/** @format */

import Image from 'next/image'
import React from 'react'
import { useActions } from '../../../../../../hooks/useActions'

import styles from './Step1.module.scss'

export interface UploadVideoPhotoRespons {
  createdAt: string
  id: string
  path: string
  updatedAt: string
}

interface Props {
  file: UploadVideoPhotoRespons
  type: 'photo' | 'video'
}

const SmallCardForImageVideo: React.FC<Props> = ({ file, type = 'photo' }) => {
  const [openButtons, setOpenButtons] = React.useState(false)
  const { deletePhoto } = useActions()

  const deletePhotos = async () => {
    deletePhoto({ type: type, photoId: file.id, photoUrl: file.path })
  }

  return (
    <div>
      <div
        className={styles.smallImage}
        onMouseOver={() => setOpenButtons(true)}
        onMouseOut={() => setOpenButtons(false)}
      >
        {type === 'photo' ? (
          <Image
            width={100}
            height={100}
            loader={(src) => file.path}
            src={file.path}
            key={file.id}
            alt={file.id}
          />
        ) : (
          <div>
            <video width='1280' height='1020' className='rounded-xl' controls>
              <source src={file.path} type='video/mp4' />
            </video>
          </div>
        )}

        <div className={openButtons ? styles.buttonsOpen : styles.buttons}>
          <ul>
            <li onClick={deletePhotos}>Delete</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SmallCardForImageVideo
