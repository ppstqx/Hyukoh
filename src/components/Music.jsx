import React from 'react';
import './Music.css';
import Musicbox from './Musicbox';
import pimage1 from '../images/1.jpg';
import pimage2 from '../images/2.jpg';
import pimage3 from '../images/3.jpg';
import pimage4 from '../images/4.jpg';
import pimage5 from '../images/5.jpg';
import pimage6 from '../images/6.jpg';

function Music() {
    return (
        <div id='music'>
            <h1>MUSIC</h1>
            <div className="a-container">
            <Musicbox image={pimage1} des1="1. Help" des2="2. Hey Sun" des3="3. Silverhair Express" des4="4. Flat dog" des5="5. World of the Forgotten" des6="6. New born" title="사랑으로 (through love)"/>
                <Musicbox image={pimage2} des1="1. Graduation" des2="2. 하늘나라 SkyWorld" des3="3. LOVE YA!" des4="4. Citizen Kane" des5="5. Gang Gang Schiele" des6="6. Goodbye Seoul" title="24 : HOW TO FIND TRUE LOVE AND HAPPINESS "/>
                <Musicbox image={pimage3} des1="1. Burning youth" des2="2. Tokyo Inn" des3="3. 가죽자켓 (Leather Jacket)" des4="4. TOMBOY" des5="5. 2002WorldCup" des6="6. Jesus lived in a motel room" title="23"/>
            </div>
            <div className="a-container">
            <Musicbox image={pimage4} des1="1. Settled Down" des2="2. 와리가리 (Comes And Goes)" des3="3. 큰새 (Big Bird)" des4="4. Mer" des5="5. Hooka" des6="6. 공드리 (Gondry)" title="22"/>
                <Musicbox image={pimage5} des1="1. Bamboo" des2="2. Panda Bear" title="Panda Bear"/>
                <Musicbox image={pimage6} des1="1. Lonely" des2="2. Feels Like Roller – Coaster Ride" des3="3. Ohio" des4="4. 위잉위잉 (Wi Ing Wi Ing)" des5="5. Our Place" des6="6. I Have No Hometown" title="20"/>
            </div> 
        </div>
    )
}

export default Music
