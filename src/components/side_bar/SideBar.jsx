import React, { useState, useEffect } from 'react'
import { SideChannel } from '../side_channels/channels'
import { Recommended } from '../Recomendations/Recom'
import { SmallSideBar } from '../Small_sidebar/S_sideBar'
import './SideBar.css'

export function SideBar () {
  const [open, setOpen] = useState(true)

  const toggleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    const button = document.querySelector('.contractbttn')

    const handleClick = () => {
      toggleOpen()
    }

    button.addEventListener('click', handleClick)

    return () => {
      button.removeEventListener('click', handleClick)
    }
  }, [open])

  return (
    <div className={`B-Sidebar ${open ? 'open' : 'closed'}`}>
      <div className='SideBar'>
        {open && (
          <>
            <div>
              <Recommended />
            </div>
            <div>
              <SideChannel />
            </div>
          </>
        )}
        {!open && (
          <>
            <div>
              <SmallSideBar />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
