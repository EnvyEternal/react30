import React, { Component } from 'react'
import UserItem from '../UserItem'

const db =  [
    {id: 1, name: 'Jhon', surname:'Fox'},
    {id: 2, name: 'Ann', surname:'Jhonson'},
    {id: 3, name: 'Jed', surname:'Cor'},
    {id: 4, name: 'Helen', surname:'Fox'},
]

export default class UserList extends Component {
    constructor(props){
        super(props)
        this.state = {users: db.map(u => ({...u, isSelected:false}))}
    }
  
    mapUser = (user, index) =>{
        const {users} = this.state
        const selectUserHandler = () =>{
            const updateUsers = [...users];
            updateUsers[index].isSelected = !updateUsers[index].isSelected
            this.setState({users: updateUsers})
        }
        return <UserItem key={user.id} user={user} onSelectUser={selectUserHandler} isSelected={user.isSelected}/>
    }
    render() {
        const {users} = this.state;
        return (
           <ul>{users.map(this.mapUser)}</ul>
        )
    }
}
