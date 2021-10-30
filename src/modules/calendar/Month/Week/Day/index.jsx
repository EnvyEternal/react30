import React, { Component } from 'react'
import { format, isSameDay, isSameMonth } from 'date-fns'

const Day = ({date, dayDate, currentDate}) => {
    const isCurrent  = isSameMonth(dayDate, currentDate) && isSameDay(dayDate, currentDate);
    const dayStyle = classNames(styles.day, {
        [styles.currentDay]: isCurrentDay,
        [styles.otherMonth]: !isSameMonth(dayDate, date)
    })
    return <ul>{format(dayDate, 'd')}</ul>
}

export default Day
