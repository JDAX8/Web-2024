import './TopGroups.css'
import { topgroupscards } from '../../data/topgroups_data'

export const TopGroups = () => {
  return (
    <div className='live-topgroups'>
      {topgroupscards.map((topgroups) => (
        <div key={topgroups.id} className='main-topgroups'>
          <div className='topgroups_image'>
            <img id='topgrups-img-size' src={topgroups.src} alt='' />
            <h2 className='grouptype'>{topgroups.title}</h2>
          </div>
        </div>
      ))}
    </div>
  )
}
