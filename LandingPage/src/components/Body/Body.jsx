import { SideBar } from '../side_bar/SideBar'
import { StreamChannel } from '../StreamChannels/StreamChannels'
import { streamcards } from '../../data/streams_data.js'
import { BigChannel } from '../BigChannelLive/BigChannel'
import { LiveCategory } from '../LiveCategory/LiveCategory'
import { TopGroups } from '../TopgroupsLive/TopGroups'
import { Footer } from '../Footer/Footer'
import React, { useState, useRef } from 'react'

import './Body.css'

export function Body () {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const scrollRef = useRef(null)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % streamcards.length)
    scrollRef.current.scrollLeft += scrollRef.current.offsetWidth // Smoothly scroll right
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + streamcards.length) % streamcards.length
    )
    scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth // Smoothly scroll left
  }

  return (
    <>
      <div className='all-content'>
        <div className='body-sidebar'>
          <SideBar />
        </div>
        <div className='body-container'>
          <div className='title1-container'>
            <h3 className='title1'>Streams destacados</h3>
          </div>
          <div className='component-overflow-b'>
            <div className='b-channels-container'>
              <BigChannel
                streamcards={streamcards}
                currentIndex={currentIndex}
                hoveredIndex={hoveredIndex}
                onHoveredChange={setHoveredIndex}
                onNext={handleNext}
                onPrev={handlePrev}
                scrollRef={scrollRef}
              />
            </div>
          </div>
          <div className='color-line' />
          <h3 className='title1'>Categorías Top en vivo</h3>
          <div className='component-overflow'>
            <div className='Category-section'>
              <LiveCategory />
            </div>
          </div>
          <div className='color-line' />
          <h3 className='title4'>Grupos Top en directo</h3>
          <div className='topgroups-overflow'>
            <div className='topgroups-sections'>
              <TopGroups />
            </div>
          </div>
          <div className='color-line' />
          <h3 className='title3'>Canales de Juegos recomendados</h3>
          <div className='component-overflow'>
            <div className='s-channels-container'>
              <StreamChannel />
            </div>
          </div>
          <div className='color-line' />
          <div className='footer-container-final'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
