import { smallstreamcards } from '../../data/smallstreams_data'
import './StreamChannels.css'

export const StreamChannel = () => {
  return (
    <div className='live-channels'>
      {smallstreamcards.map((stream) => (
        <div key={stream.id} className='LiveChannels'>
          <div className='streams_image'>
            <img src={stream.src} alt='' />
            <div className='Live-section'>EN VIVO</div>
            <div className='on_live'>
              <div className='viewers_count'>{stream.views} espectadores</div>
            </div>
          </div>
          <div className='info_stream'>
            <div className='streamer_name'>
              <img className='Live_logo' src={stream.streamer_icon} alt='' />
              <h2 className='Streamer_Name'>{stream.streamer_name}</h2>
            </div>
            <div className='stream_desc'>
              <h2 className='stream_title truncate'>{stream.title}</h2>
              <p className='LiveCategory'>{stream.category}</p>
              <div className='stream_etiquetas'>
                {stream.etiquetas.map((etiqueta, index) => (
                  <div key={index} className='big-etiqueta'>
                    <div className='etiqueta-container'>
                      <p>{etiqueta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}