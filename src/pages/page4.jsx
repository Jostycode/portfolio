import React from 'react'
import img1 from '../assets/PNG/fb.png'
import img2 from '../assets/PNG/insta.png'
import img3 from '../assets/PNG/whatsapp.png'
import img4 from '../assets/PNG/github2.png'
import Navbar3 from '../navbar/navbar3'

export default function Page4() {
  return (
    <>
    <Navbar3 />
    <div id="tab4">
            <h1 id="port">Contact</h1>
                <div class="port2">
                    <div class="port21">
                            <a href="" target="_blank">
                                <img src={img1} alt="" id="icon"/>
                            </a>
                    </div>
                    <div class="port21">
                            <a href="" target="_blank">
                                <img src={img2} alt="" id="icon"/>
                            </a>
                    </div>
                    <div class="port21">
                            <a href=" https://wa.me/+237694786507" target="_blank">
                                <img src={img3} alt="" id="icon"/>
                            </a>
                    </div>
                    <div class="port21">
                            <a href="" target="_blank">
                                <img src={img4} alt="" id="icon"/>
                            </a>
                    </div>
                </div>
    </div>
    </>
  )
}
