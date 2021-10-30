import React, { Component } from 'react'
import UserList from '../userList'

const UserItem = props => {
   
        const {onSelectUser, isSelected,user: {id, name, surname}} = props;
        return (
            <li>
                <span>id "{id}" fullname: "{name} {surname}"</span>
                <button onClick={onSelectUser}>Select</button>
            </li>
        )
    
}

export default UserItem
