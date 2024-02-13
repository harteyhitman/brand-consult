import NavArrow from '../assets/images/nav-arrow.png'
import Button from '../components/button'
import { ourCompany } from '../data/store'
import { services } from '../data/store'

const Brand = () => {
    return (
        <div className='brand-cont'>
            <div className="brand-text">
                <div className="brand-cons">
                    <div className="nav-arrow-const">
                        <img src={NavArrow} alt="" />
                    </div>

                    <div className="brand-text">
                        <h2>Brand</h2>
                        <p>consult</p>
                    </div>
                </div>
                <p>Amet minim mollit non deserunt ullamco est sit <br />
                    aliqua dolor do amet sint. Velit officia consequat <br />
                    duis enim velit mollit. Exercitation veniam consequat <br />
                    sunt nostrud amet.</p>
            </div>


            <div className="our-company">
                {ourCompany.map((company) => (
                    <div key={company.id} className="company">
                        <h4>{company.ourtitle}</h4>
                        <p>{company.home}</p>
                        <p>{company.About}</p>
                        <p>{company.Portfolio}</p>
                        <p>{company.service}</p>

                    </div>
                ))}
            </div>
            <div className="services">
                {services.map((service) => (
                    <div key={service.id} className="service">
                        <h4>{service.Services}</h4>
                        <p>{service.business}</p>
                        <p>{service.planning}</p>
                        <p>{service.Consulting}</p>
                        <p>{service.Marketing}</p>
                        <p>{service.Design}</p>
                        <p>{service.Audit}</p>
                    </div>
                ))}
            </div>

            <div className="subcribe-newsletter">
                <h4>Subscribe to our newsletter</h4>
                <div className="email-container">
                    <input type="text" placeholder='Your email here' />
                    <Button label="Subscribe" />
                </div>
            </div>
        </div>
    )
}

export default Brand