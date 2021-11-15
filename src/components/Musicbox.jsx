import React from 'react'
import './Musicbox.css'

function Musicbox(props) {
    return (
        <div className='a-box'>
            <div className="a-b-img">
                <img className="image-img" src={props.image} alt='' />
                <div className="image-overlay">
                <div className="image-des">
                    <p>{props.des1}</p>
                    <p>{props.des2}</p>
                    <p>{props.des3}</p>
                    <p>{props.des4}</p>
                    <p>{props.des5}</p>
                    <p>{props.des6}</p>
                </div>
            </div>

            </div>


                <div className="a-b-text">
                    <h3> {props.title} </h3>
                </div>
              
        </div>
    )
}
export default Musicbox
