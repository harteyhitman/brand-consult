import Arrow from '../assets/images/nav-arrow.png'
import Oval from '../assets/images/oval-img.png'
import Rigth from '../assets/icons/arrow-right.png'
import Left from '../assets/icons/arrow-left.png'
import Group1 from '../assets/images/group1.png'
import Group2 from '../assets/images/group2.png'
import Group3 from '../assets/images/group3.png'
import React, { useRef, useState } from 'react';

const Solution = () => {
    const scrollContainerRef = useRef(null);
    const [scrollAmount, setScrollAmount] = useState(300);
  
    const handleScroll = (direction) => {
      const container = scrollContainerRef.current;
  
      if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
      } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
      }
    };

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
                    <img className='right-scroll' src={Rigth} alt="" onClick={() => handleScroll('left')}/>
                    <img className='left-scroll' src={Left} alt="" onClick={() => handleScroll('right')}/>
                </div>
                <div className="groups" ref={scrollContainerRef}>
                    <img src={Group1} alt="" />
                    <img src={Group2} alt="" />
                    <img src={Group3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Solution