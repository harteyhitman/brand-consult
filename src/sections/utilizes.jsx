import React from 'react'
import Button from '../components/button'
import BtnArrow from '../assets/icons/btn-arrow.png'
import SmillingGirl from '../assets/images/smilling-girl.png'

const Utilizes = () => {
    return (
        <div className='utilizes-containter'>
            <div className="right">
                <h2>Utilize our <br /> solution to <br /> expand
                    your business.
                </h2>
                <p>Make your business prosper with our great team of experts. <br />
                    We'll make your new business plan a success!</p>
                <div className="utility-btn">
                    <Button label="Let’s Talk" />
                    <img src={BtnArrow} alt="" />
                </div>

            </div>
            <div className="left">
                <img src={SmillingGirl} alt="" />
            </div>
        </div>
    )
}

export default Utilizes