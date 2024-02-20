import './BigChannel.css'
import React, { useState } from 'react'
import { streamcards } from '../../data/streams_data'
import next from '../../imgs/right.png'
import prev from '../../imgs/left.png'

export const BigChannel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % streamcards.length)
  }

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + streamcards.length) % streamcards.length
    )
  }
  return (
    <div className='b-live-channels'>
      {streamcards.slice(currentIndex, currentIndex + 3).map((stream) => (
        <div key={stream.id} className='b-LiveChannels'>
          <div className='b-streams_image'>
            <img src={stream.src} alt='' />
            <div className='b-Live-section'>EN VIVO</div>
            <div className='b-on_live'>
              <div className='b-viewers_count'>{stream.views} espectadores</div>
            </div>
          </div>
          <div className='b-info_stream'>
            <div className='b-stream_desc'>
              <h2 className='b-stream_title truncate'>{stream.title}</h2>
              <div className='b-streamer_name'>
                {/* <img className="b-Live_logo" src={stream.streamer_icon} alt="" /> */}
                <h2 className='b-Streamer_Name'>{stream.streamer_name}</h2>
              </div>
              <p className='b-LiveCategory'>{stream.category}</p>
            </div>
          </div>
        </div>
      ))}
      <button className='previous_btn' onClick={handlePrev}><img src={prev} alt='' /></button>
      <button className='next_btn' onClick={handleNext}><img src={next} alt='' /></button>
    </div>
  )
}
