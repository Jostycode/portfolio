import React from 'react'
import Navbar2 from '../navbar/navbar2'
import p1 from '../assets/PNG/cityzenaction.png'
import Video1 from '../assets/cityzenaction/v1.mp4'
import Video2 from '../assets/cityzenaction/v2.mp4'
import Video3 from '../assets/cityzenaction/v3.mp4'


export default function Page3() {
  return (
    <>
    <Navbar2 />
    <div id="tab3">
            <h1 id="port">portfolio</h1>
            <div class="tp1">
                <h2 class="portfolio1">PROJET: <h2>Cityzenaction</h2></h2>
                <div class="port1">
                    <div class="port11">
                        <video src={Video1} controls class="port111" ></video>
                        <h2 class="port112">Acceuil</h2>
                    </div>
                    <div class="port11">
                        <video src={Video2} controls class="port111" ></video>
                        <h2 class="port112">A propos</h2>
                    </div>
                    <div class="port11">
                        <video src={Video3} controls class="port111" ></video>
                        <h2 class="port112">Formation</h2>
                    </div>
                </div>
            </div>
            <div class="tp1">
                <h2 class="portfolio1">PROJET: <h2>Speechblog</h2></h2>
                <div class="port1">
                    <div class="port11">
                        <div class="port111"></div>
                        <div class="port112"></div>
                    </div>
                    <div class="port11">
                        <div class="port111"></div>
                        <div class="port112"></div>
                    </div>
                    <div class="port11">
                        <div class="port111"></div>
                        <div class="port112"></div>
                    </div>
                </div>
            </div>
        </div>
        </>
  )
}
