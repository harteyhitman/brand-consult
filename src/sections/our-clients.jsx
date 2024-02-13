import GreenLady from '../assets/images/green-lady.png'
import Quotation from '../assets/icons/quotation-mark.png'
import SmallStar from '../assets/icons/small-stars.png'
import Dots from '../assets/icons/dots.png'
const Ourclients = () => {
  return (
    <div className='our-clients'>
        <h3>What’s Our Client Saying?</h3>
        <p>We are trusted by numerous companies from different business to meet their needs.</p>
        <div className="clients-down">
            <div className="right-clients">
                <img src={GreenLady} alt="" />
                <img src={Dots} alt="" />
            </div>
            <div className="left-clients">
                <img src={Quotation} alt="" />
                <h4>Working with Consuly to implement their strategic <br /> planning framework has helped us focus on the biggest opportunities for growth.</h4>
                <img src={SmallStar} alt="" />
                <h3>Maya Language</h3>
                <p>Director ACT</p>
            </div>
        </div>
    </div>
  )
}

export default Ourclients