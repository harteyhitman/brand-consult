import Meeting from '../assets/images/meeting-team.png'
const ExportTeam = () => {
    return (
        <div className='export-team-cont'>
            <div className="right-export">
                <img src={Meeting} alt="" />
            </div>
            <div className="left-export">
                <h3>We Lead Your <br /> Business Team To Victory</h3>
                <p className='passionate'>We are a team of passionate business consultants &  technology <br />
                    veterans eager to help companies reach their full potential.</p>
                <div className="our-mission">
                    <div>Our Mission</div>
                    <div>Our Vision</div>
                    <div>Our Value</div>
                </div>
                <p className='strategic'>Our strategic planning process rapidly delivers plans that stick, with execution support to make your plans a reality.</p>
            </div>
        </div>
    )
}

export default ExportTeam