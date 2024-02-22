import { SideBar } from '../side_bar/SideBar'
import { StreamChannel } from '../StreamChannels/StreamChannels'
import { BigChannel } from '../BigChannelLive/BigChannel'
import { LiveCategory } from '../LiveCategory/LiveCategory'
import { TopGroups } from '../TopgroupsLive/TopGroups'
import { Footer } from '../Footer/Footer'

import './Body.css'

export function Body () {
  return (
    <>
      <div className='all-content'>
        <div className='body-sidebar'>
          <SideBar />
        </div>
        <div className='body-container'>
          <h3 className='title1'>Streams destacados</h3>
          <div className='b-channels-container'>
            <BigChannel />
          </div>
          <div className='color-line' />
          <div className='Category-section'>
            <h3 className='title2'>Categorías Top en vivo</h3>
            <LiveCategory />
            <div className='color-line' />
            <h3 className='title4'>Grupos Top en directo</h3>
            <div className='topgroups-sections'>
              <TopGroups />
            </div>
            <div className='color-line' />
          </div>
          <h3 className='title3'>Canales de Juegos recomendados</h3>
          <div className='s-channels-container'>
            <StreamChannel />
          </div>
          <div className='color-line' />
          <div className='footer-container-final'>
          <Footer></Footer>
        </div>
        </div>
      </div>
    </>
  )
}
