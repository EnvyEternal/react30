import React from 'react'

const SelecUsers = props => {
    const {users} = props;
    const selectedUsersList = users.filter(u => u.isSelected)
    return(
        <ul>
            {selectedUsersList.map((u)=>{
                <li key={u.id}>
                    {u.name} {u.surname}
                </li>
            })}
        </ul>
    )
}

export default SelecUsers