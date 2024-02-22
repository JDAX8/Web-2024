import { streamcards } from '../../data/streams_data'

import './channels.css'

export const SideChannel = ({ streams = streamcards }) => {
  return (
    <div className='Side_Channels'>
      {streams.map((stream) => (
        <div key={stream.id} className='SideChannels'>
          <div className='logodiv'>
            <img className='s_logo' src={stream.streamer_icon} alt='' />
          </div>
          <div className='info-container'>
            <h4 className='ChannelName'>{stream.streamer_name}</h4>
            <div className='category-container'>
              <p className='category'>{stream.category}</p>
            </div>
          </div>
          <div className='viewers-container'>
            <div className='redcircle' />
            <p className='viewers'>{stream.views}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
