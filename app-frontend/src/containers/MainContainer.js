import React from 'react'
import './MainContainer.scss';

export default function MainContainer(props) {
    return (
        <div className='main-container'>
            <div className='left-panel'>
                <div className='knowledge-list'>
                    
                </div>


            </div>
            <div className='right-panel'>
                <DisplayTable />
            </div>
            
        </div>
    )
}