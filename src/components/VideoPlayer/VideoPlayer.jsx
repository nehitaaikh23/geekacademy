import React, { useState, useRef } from 'react'
import './VideoPlayer.css'
import about_video from '../../assets/about-video.mp4';
import close_icon from '../../assets/close-icon.png'


const VideoPlayer = (props) => {

  const player = useRef(null);

  return (
    <div className={`video-player ${props.playVideo? '': 'hide'}`} ref={player} onClick={(e) => {
      if(e.target === player.current){
        props.setPlayVideo(false);
      }
    }}>
        <img src={close_icon} alt="" onClick={() => {props.setPlayVideo(false)}}/>
        <video src={about_video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer