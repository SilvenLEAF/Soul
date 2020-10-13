import M from 'materialize-css'
import '../../styles/Home.scss';


import React, { useEffect } from 'react'





function Home() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div className="container">

      <div id="myLandingIcon"></div>
      <div className="myLandingContentHolder">
        <h2 id="myLandingTitle" className="pageTitle">
          Soul of Darkness
        </h2>
        
        <div className="myLandingDescription">
          Hi there! I am LEAF, a crazy Fullstack maniac, madly in love with JS, aiming Mt View Google. I LOVE coding.
        </div>

        <h6 className="red-text myWithLoveFromSilvenLEAF" >
          --------With LOVE from SilvenLEAF
        </h6>
      </div>
      


      
    </div>
  )
}

export default Home
