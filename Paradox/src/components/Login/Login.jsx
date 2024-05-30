import { Return } from '../Return/Return'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { Card } from '../Card/Card'
import { Programs } from '../Programs/Programs'
import pops from '../../assets/imgs/userimg.png'
import React from 'react'
import './Login.css'


export function Login(){
    return(
      <>
        <main>
          <Card userimage={pops} nombre={"Juan Martin López"} description={"3d modeler - Digital artists -  web programmer"}
          socialmedia={[
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
            "https://seeklogo.com/images/B/behance-logo-1373E40919-seeklogo.com.png",
            "https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338508_1280.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
          ]}></Card>
          <Return></Return>
          <Button type="button" value="JOIN PARADOX"></Button>      
          <Input type="text" placeholder="Name" onChange={() => {}} />
        </main>
        <footer>
          <Programs programs={[
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
            "https://seeklogo.com/images/B/behance-logo-1373E40919-seeklogo.com.png",
            "https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338508_1280.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png",
          ]}></Programs>
        </footer>
      </>
    )
}