import React from 'react';
import './Banner.css';
import bannerimage from '../images/hyukoh.png' 

function Banner() {
    return (
        <div id='main'>
            <div className="banner-image">
                <img src={bannerimage}alt='' />
            </div>
            <div className="banner-heading">
                <h2 className="korea">오혁 (보컬, 기타) </h2>
                <h2 className="name">OHHYUK (Vocal, Guitar)</h2>
                <h2 className="korea">임현제 (기타) </h2>
                <h2 className="name">HYUNJAE (Guitar)</h2>
                <h2 className="korea">임동건 (베이스) </h2>
                <h2 className="name">DONGGEON (Bass)</h2>
                <h2 className="korea">이인우 (드럼) </h2>
                <h2 className="name">INWOO (Drums)</h2>
                      
            </div>
        </div>
    )
}

export default Banner
