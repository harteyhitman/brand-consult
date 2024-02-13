import React from 'react'
import Navbar from '../components/navbar'
import Utilizes from '../sections/utilizes'
import Solution from '../sections/solution'
import ExportTeam from '../sections/export-team'
import ServeYourInterest from '../sections/serve-your-interest'
import Ourmentors from '../sections/our-mentors'
import Ourclients from '../sections/our-clients'
import Businessroute from '../sections/business-route'
import Brand from '../sections/brand'
import Copyright from '../sections/copyright'

const main = () => {
  return (
    <div className='main-page'>
        <Navbar />
        <Utilizes />
        <Solution />
        <ExportTeam />
        <ServeYourInterest />
        <Ourmentors />
        <Ourclients />
        <Businessroute />
        <Brand />
        <Copyright />
    </div>
  )
}

export default main