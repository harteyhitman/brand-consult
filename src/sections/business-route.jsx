import React from 'react'
import Button from '../components/button'

const Businessroute = () => {
    return (
        <div className='business-route'>
            <h2>Ready to change your business route</h2>
            <p>Contact with us now and get the all effecient service on your door let's
                have a chat. Shall we?</p>
            <div className="email-container">
                <input type="text" placeholder='Your email here' />
                <Button label="Subscribe" />
            </div>
        </div>
    )
}

export default Businessroute