import React from 'react';
import './Programs.css';

export function Programs({programs=[
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1051px-Adobe_Photoshop_CC_icon.svg.png',
  'https://thelogocompany.net/wp-content/uploads/2023/04/Adobe-Illustrator-Icon.png',
  'https://upload.wikimedia.org/wikipedia/commons/d/de/Procreate-icon.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png',
]}) {
  return (
    <footer className='px-programs-footer bottom-0'>
      <div className='px-programs-footer-big-container'>
      <div className='px-programs-footer-div'>
            <div className='px-programs-footer-socialmedia  flex items-center ml-20 cell:flex items-center cell:ml-80'>
              {programs.map((source, e) => (
                      <img className='px-card-socialmedia-img w-14 h-14 ml-5' key={e} src={source} alt="" />
                  ))}
            </div>
        </div>
        <section className='px-programs-footer-section h-full flex items-start'>
          <h1 className='px-programs-footer-title text-3xl cell:text-5xl'>Programs</h1>
        </section> 
      </div>
    </footer>
  );
}
