import React from 'react'

function User({user}) {
    return (
        <>
            <h5 >{'Id = '+ user?.id+ ', Name = '+ user?.name}</h5>
        </>
    )
}

export default User
