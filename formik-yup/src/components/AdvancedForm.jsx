import React from 'react'

const AdvancedForm = () => {
    return (
        <div>
            <form autoComplete="off">
                <label htmlFor="username">Username</label>
                <input id="username" type="text" placeholder="Enter your username" />
            </form>
        </div>
    )
}

export default AdvancedForm
