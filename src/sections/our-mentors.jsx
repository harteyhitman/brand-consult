import { ourMentors } from "../data/store"
import RigthBlue from '../assets/icons/blue-arrow-right.png'
import LeftBlue from '../assets/icons/blue-arrow-left.png'

const Ourmentors = () => {
  return (
    <div id="gallery" className='our-mentors-cont'>
        <h2>Our mentors are <br /> experts in different fields </h2>
        <div className="next-mentors">
                    <img src={RigthBlue} alt="" />
                    <img src={LeftBlue} alt="" />
                </div>
      <div className="mentor-profile">
      {ourMentors.map((mentors) => (
            <div key={mentors.id} className="profile">
                <img src={mentors.mentorsImg} alt="" />
                <h3>{mentors.mentorTitle}</h3>
                <p>{mentors.mentorOffice}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Ourmentors