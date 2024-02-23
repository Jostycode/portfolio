import React from 'react'
import photo from '../assets/Sans_titre-1.png'
import Navbar1 from '../navbar/navbar1'



export default function Page2() {
  return (
    <>
    <Navbar1 />
    <div id="tab2">
        <div class="apropos">
            <div id="a">
                <h1 id="ap">a propos</h1>
                <p id="ap1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, architecto eius. Molestias, corporis voluptates aspernatur voluptate autem, 
                    incidunt excepturi omnis hic eum voluptatibus, voluptas commodi quisquam unde magni inventore corrupti!
                </p>
                <input type="button" class="ac" id="ac" value="Contact"/>
            </div>
            <div>
                <img src={photo} alt="" class="photo"/>
            </div>
        </div>
    </div>
    </>
  )
}
