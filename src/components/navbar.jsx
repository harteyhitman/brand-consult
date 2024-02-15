import NavArrow from '../assets/images/nav-arrow.png'
import Button from './button'
import Hamburger from './hamburger'
import { navlist } from '../data/store'

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
                    {navlist.map((list) => (
                      <div key={list.id} className="list">
                        <ul>
                            <li>
                                <a href={`#${list.id}`}>{list.home}</a>
                            </li>
                        </ul>
                      </div>
                    ))}
                
            </div>
            <div className="nav-btn">
                <Button label="Sign up" />
            </div>
            <div className="hamburger_menu">
                <Hamburger />
            </div>
        </div>
    )
}

export default Navbar