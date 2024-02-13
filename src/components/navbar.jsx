import NavArrow from '../assets/images/nav-arrow.png'
import Button from './button'

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="brand-cons">
                <div className="nav-arrow-const">
                    <img src={NavArrow} alt="" />
                </div>

                <div className="brand-text">
                    <h2>Brand</h2>
                    <p>consult</p>
                </div>
            </div>
            <div className="nav-list">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About us</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Our services</a></li>
                </ul>
            </div>
            <div className="nav-btn">
                <Button label="Sign up" />
            </div>
        </div>
    )
}

export default Navbar