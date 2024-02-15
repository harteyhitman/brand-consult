import Arrow from '../assets/images/nav-arrow.png'
import Oval from '../assets/images/oval-img.png'
import Rigth from '../assets/icons/arrow-right.png'
import Left from '../assets/icons/arrow-left.png'
import Group1 from '../assets/images/group1.png'
import Group2 from '../assets/images/group2.png'
import Group3 from '../assets/images/group3.png'

const Solution = () => {
    return (
        <div id='brand' className='solution-container'>

            <div className="upward">
                <div className="arrow-solution">
                    <h2>We Provide The Best</h2>
                    <img src={Arrow} alt="" />
                    <div className="solution-text">
                        <h2>Solution For Your <br /> Business Development</h2>
                        <img src={Oval} alt="" />
                    </div>
                </div>
                <div className="para-solution">
                    <p>Make your business prosper with our great team of experts.
We'll make your new business plan a success!</p>
                </div>
            </div>

            <div className="downward">
                <div className="next-arrow">
                    <img src={Rigth} alt="" />
                    <img src={Left} alt="" />
                </div>
                <div className="groups">
                    <img src={Group1} alt="" />
                    <img src={Group2} alt="" />
                    <img src={Group3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Solution