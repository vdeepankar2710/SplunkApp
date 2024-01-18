import React from 'react'
import './DisplayPopup.scss'
import crossIcon from '../img/cross-button.png'
export default function DisplayPopup(props) {
    return (
        <div className='popup-container'>
            <div className='cross-btn'>
                <img src={crossIcon} onClick={props.handleCrossClick}/>
            </div>
            <div className='display-area'>
                {Object.entries(props.data).map((ele) => (
                    <div key={ele[0]}>
                        <span className='first-span'>{JSON.stringify(ele[0])}</span>
                        <span className='second-span'>:</span>
                        <span className='third-span'>{JSON.stringify(ele[1])}</span>
                    </div>
                ))}
            </div>
          
        </div>
    )
}