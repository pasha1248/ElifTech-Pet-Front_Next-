import React, { useState, useEffect, useRef } from 'react'
import styles from './SliderBaner.module.scss'
import classNames from 'classnames'

export const CitiesSlider = (props) => {
  const IMAGE_PARTS = 4

  const [activeSlide, setActiveSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(0)
  const [sliderReady, setSliderReady] = useState(false)
  const changeTO = useRef(null)
  let AUTOCHANGE_TIME = 4000

  const runAutochangeTO = () => {
    console.log('TIMEOUT')
    changeTO.current = setTimeout(() => {
      changeSlides(1)
      runAutochangeTO()
    }, AUTOCHANGE_TIME)
  }

  useEffect(() => {
    runAutochangeTO()
    // setTimeout(() => {
    //   setActiveSlide(0)
    //   setSliderReady(true)
    // }, 0)

    return () => {
      clearTimeout(changeTO.current)
    }
  }, [])

  const changeSlides = (change) => {
    clearTimeout(changeTO.current)
    const { length } = props.slides
    const prevSlide = activeSlide
    let newActiveSlide = prevSlide + change
    if (newActiveSlide < 0) newActiveSlide++
    if (newActiveSlide >= length) newActiveSlide = 0
    console.log('WORK')
    setActiveSlide(newActiveSlide)
    setPrevSlide(prevSlide)
  }

  return (
    <div
      className={classNames(styles.slider, {
        [styles['s--ready']]: sliderReady,
      })}
    >
      <p className={styles['slider__top-heading']}>Travelers</p>
      <div className={styles['slider__slides']}>
        {props.slides.map((slide, index) => (
          <div
            className={classNames(styles['slider__slide'], {
              [styles['s--active']]: activeSlide === index,
              [styles['s--prev']]: prevSlide === index,
            })}
            key={slide.city}
          >
            <div className={styles['slider__slide-content']}>
              <h3 className={styles['slider__slide-subheading']}>
                {slide.country || slide.city}
              </h3>
              <h2 className={styles['slider__slide-heading']}>
                {slide.city.split('').map((l, ID) => (
                  <span key={ID + l}>{l}</span>
                ))}
              </h2>
              <p className={styles['slider__slide-readmore']}>read more</p>
            </div>
            <div className={styles['slider__slide-parts']}>
              {[...Array(IMAGE_PARTS).fill()].map((x, i) => (
                <div className={styles['slider__slide-part']} key={i}>
                  <div
                    className={styles['slider__slide-part-inner']}
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        className={styles['slider__control']}
        onClick={() => changeSlides(-1)}
      />
      <div
        className={classNames(
          styles['slider__control'],
          styles['slider__control--right']
        )}
        onClick={() => changeSlides(1)}
      />
    </div>
  )
}

export const slides = [
  {
    city: 'Paris',
    country: 'France',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/paris.jpg',
  },
  {
    city: 'Singapore',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg',
  },
  {
    city: 'Prague',
    country: 'Czech Republic',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg',
  },
  {
    city: 'Amsterdam',
    country: 'Netherlands',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg',
  },
  {
    city: 'Moscow',
    country: 'Ukraine',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg',
  },
]
