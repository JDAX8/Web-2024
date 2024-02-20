import React from 'react'
import StreamChannel from '../StreamChannels/StreamChannels'
import { streamcards } from '../../data/streams_data'
const LiveChannels = () => {
  return (
    <div className='live-channels'>
      {streamcards.map((stream) => (
        <StreamChannel key={stream.id} streams={stream} />
      ))}
    </div>
  )
}

export default LiveChannels
