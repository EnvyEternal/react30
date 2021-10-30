import React, { Component } from 'react'
import UserItem from '../UserItem'



const UserList = (props) => {
   const {users, updateUsers} = props
    const mapUser = (user, index) =>{
        //const {users} = this.state
        const {users, updateUsers} = props;
        const selectUserHandler = () =>{
            const updateUsers = [...users];
            updateUsers[index].isSelected = !updateUsers[index].isSelected
            updateUsers(updateUsers)
            
        }
        return <UserItem key={user.id} user={user} onSelectUser={selectUserHandler} isSelected={user.isSelected}/>
    }
    
        return (
           <ul>{users.map(mapUser)}</ul>
        
        )
}

export default UserList