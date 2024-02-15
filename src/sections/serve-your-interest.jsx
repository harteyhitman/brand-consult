import { boxes } from "../data/store"
const ServeYourInterest = () => {
  return (
    <div id="music" className='container-box'>
        <h1>What We Do To Serve Your Best</h1>
        <p>We provide comprehensive services to support your business by
leveraging strategy to drive people, process, and information.</p>
    <div className="boxes-cont">
      {boxes.map((box) => (
        <div key={box.id} className="boxes">
            <div className="box">
                <img src={box.img} alt="" />
                <h3>{box.head}</h3>
                <p>{box.para}</p>
            </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default ServeYourInterest