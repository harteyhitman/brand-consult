import Facebook from '../assets/icons/facebook.png'
import Linkedin from '../assets/icons/linkedin.png'
import Twitter from '../assets/icons/twitter.png'
import Instagram from '../assets/icons/instagram.png'
const Copyright = () => {
  return (
    <div className='copyright'>
        <p>All Copyrights are reserved my Mamdou Ghaneemy</p>
        <div className="social-media">
            <img src={Facebook} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Twitter} alt="" />
            <img src={Instagram} alt="" />
        </div>
    </div>
  )
}

export default Copyright