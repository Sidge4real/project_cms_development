import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
import Header from "../components/header";
import BackgroundImage from 'gatsby-background-image'
import background from '../images/image1.png'
 

const indexPage = () => {
    return(
      <Layout>
        <section className="index-section-one">
        <StaticImage id="index-image-1" src="../images/image1.png" alt="community"></StaticImage>
        <div className="flex-container">
        <h2 className="slogan">Imagine</h2>
        <p className="slogan-small">the perfect community for your ideas... 
        A place for your people to enjoy, to explore or to find friends. No idea to start with this? No worries, we guide you!</p>
        </div>
        <svg viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,90.7C480,107,600,181,720,202.7C840,224,960,192,1080,176C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        </section>
        <section className="index-section-two">
        <div className="flex-container slide-top">
          <h3>Choose the perfect platform</h3>
          <p>The right choice of platform can make a diffrence. It looks simple, but it's not.
            A community depends on the subject of it. Each community belongs somewhere, example on discord. 
            When the choice goes to discord, you can create much ways inside your community towards more subdivisions.
          </p>
        </div>

        <StaticImage className="slide-right" width="500" height="500" src="../images/image3.png" alt="platforms"></StaticImage>

        </section>
        <section className="index-section-two">
        <StaticImage className="slide-left" src="../images/image2.png" alt="social"></StaticImage>
        <div className="flex-container slide-bottom">
          <h3>We're here to help!</h3>
          <p>We're going to guide you trough this proces! All what you need to know will be given, we're gonna explain what each platform defined itself. By our help you will get a better view for this choice!
          </p>
        </div>
        </section>
        <section className="index-section-three">
          <h3>Follow our guide</h3>
          <button>check here</button>
        </section>
        <div className="contact-container">
            <h2>Get in touch</h2>
            <form>
                <div className="flex-form-container">
                <div className="input-container">
                    <input type='text' required={true} />
                    <label></label>
                    <span>Email</span>
                </div>
                <div className="input-container">
                    <input type='text' required={true} />
                    <label></label>
                    <span>First name</span>
                </div>
                <div className="input-container">
                    <input type='text' required={true} />
                    <label></label>
                    <span>Last name</span>
                </div>
                </div>
                <div className="flex-form-container">
                <div className="input-container">
                    <input type='text' required={true} />
                    <label></label>
                    <span>Subject</span>
                </div>
                <div className="input-container textarea">
                    <textarea type='textarea' required={true} />
                    <label></label>
                    <span>Qeustion</span>
                </div>
                </div>
                {/* netlify hidden input */}
                <input type="hidden" name="form-name" value="contact"></input> 
                <button type="submit" value="Submit">submit</button>
            </form>
            </div>
      </Layout>
    )
}

export default indexPage
