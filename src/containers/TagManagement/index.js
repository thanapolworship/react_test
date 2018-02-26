import React from 'react'

import {
  Images,
  Contents,
  Icons,
  Logos
} from "themes"

export class TagManagementContainer extends React.Component {
  render() {
    return (
      <div className='tagManagement'>
        <div className='tableRow header'>
            <div className='tableCell'>No.</div>
            <div className='tableCell'>User Name</div>
            <div className='tableCell'>Email</div>
            <div className='tableCell'>Phone Number</div>
            <div className='tableCell'>Option</div>
        </div>
        <div className='tableRow'>
            <div className='tableCell'>200</div>
            <div className='tableCell'>
              <span className='coverRadio'>
                <img src={[Logos['logo.png']]} alt="Banner" className='avatar'/>
              </span>
              Laraine Crosselvin
            </div>
            <div className='tableCell'>Info@lorem.com</div>
            <div className='tableCell'>+6584 4455 5433</div>
            <div className='tableCell'>
              <a href=""><i></i></a>
            </div>
        </div>
        <div className='tableRow'>
            <div className='tableCell'>200</div>
            <div className='tableCell'>Laraine Crosselvin</div>
            <div className='tableCell'>Info@lorem.com</div>
            <div className='tableCell'>+6584 4455 5433</div>
            <div className='tableCell'>
              <a href=""><i></i></a>
            </div>
        </div>
        <div className='tableRow'>
            <div className='tableCell'>200</div>
            <div className='tableCell'>Laraine Crosselvin</div>
            <div className='tableCell'>Info@lorem.com</div>
            <div className='tableCell'>+6584 4455 5433</div>
            <div className='tableCell'>
              <a href=""><i></i></a>
            </div>
        </div>
        <div className='tableRow'>
            <div className='tableCell'>200</div>
            <div className='tableCell'>Laraine Crosselvin</div>
            <div className='tableCell'>Info@lorem.com</div>
            <div className='tableCell'>+6584 4455 5433</div>
            <div className='tableCell'>
              <a href=""><i></i></a>
            </div>
        </div>
      </div>
    )
  }
}