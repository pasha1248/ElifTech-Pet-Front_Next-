import React from 'react'
import Plyr from 'plyr-react'
import 'plyr-react/plyr.css'
import styles from './PlayerCustom.module.scss'

type Props = {}

const plyrProps = {
  source: {
    type: 'video',
    provider: 'html5',
    title: 'Example title',
    previewThumbnails: {
      src: 'http://res.cloudinary.com/dpo5g9bud/image/upload/v1673951869/coverPhoto/hmc8fgnscib7lkzqocf3.webp',
    },
    sources: [
      {
        src: 'http://res.cloudinary.com/dpo5g9bud/video/upload/v1673967314/promotionalVideos/f4dnrd5dz7cha8ehibjp.webm',
        type: 'video/mp4',
        size: 720,
      },
    ], // https://github.com/sampotts/plyr#the-source-setter
  },
}

const PlayerCustom = (props: Props) => {
  return (
    <div className={styles.player}>
      {/* @ts-ignore */}
      <Plyr {...plyrProps} />
    </div>
  )
}

export default PlayerCustom
