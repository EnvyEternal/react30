import React, {Component} from 'react'
import Month from './Month'

const Calendar = ({currentDate}) => {
    return(
        <div>
            <Month date={currentDate} currentDate={currentDate}/>
        </div>
    )
}