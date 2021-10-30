import { endOfWeek, getWeek, startOfWeek } from 'date-fns'
import { eachDayOfInterval } from 'date-fns/esm'
import React from 'react'
import Day from './Day'

const getWeek = ({date, weekDate, currentDate}) => {
    eachDayOfInterval({
        start: startOfWeek(weekDate),
        end: endOfWeek(weekDate),

    }).map((dayDate) => <Day key={dayDate} dayDate={dayDate} date={date} currentDate={currentDate}/>)
}
 
const Week = (props) =>{
    <ul>{getWeek(props)}</ul>
}

export default Week;