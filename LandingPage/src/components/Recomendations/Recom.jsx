import contractIcon from '../../imgs/contract.png'
import './Recom.css'

export const Recommended = () => {
  return (
    <>
      <div className='Foryou'>
        <p className='recomended-p'>Recomendado</p>
        <button className='contractbttn'>
          <img className='btnimg' src={contractIcon} alt='Contract Icon' />
        </button>
      </div>
    </>
  )
}
