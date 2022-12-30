import Layout from "../components/layout"
import React from "react"
import EmailIcon from "@mui/icons-material/Email"
import CallIcon from "@mui/icons-material/Call"
import { StaticImage } from "gatsby-plugin-image"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import SignpostIcon from "@mui/icons-material/Signpost"

function copyFunction(event) {
  let copyText = event.target.innerText
  navigator.clipboard.writeText(copyText)
  let tooltip = event.target.firstChild
  tooltip.innerHTML = "Copied"
}
function outFunc(event) {
  let tooltip = event.target.firstChild
  tooltip.innerHTML = "Click to copy"
}

const ContactPage = () => {
  return (
    <Layout>
      <section className="contactPage-section">
        <h2>Contact us</h2>
        <p>
          Having some issues when using our guide or contact form on the home
          page? You can contact us via our contact information below! We're open
          for questions and business requests. If you didn't filled in the form,
          please do this before and let us contact you! Thank you!
        </p>
        <div className="contact-info-flex">
          <div className="contact-info-container">
            <EmailIcon className="icon" />
            <div class="tooltip">
              <p>
                <button
                  className="copyText"
                  onClick={copyFunction}
                  onMouseOut={outFunc}
                  onKeyDown={copyFunction}
                  onBlur={() => void 0}
                >
                  <span class="tooltiptext" id="myTooltip">
                    Click to copy
                  </span>
                  help@wiz.com
                </button>
              </p>
            </div>
          </div>

          <div className="contact-info-container">
            <CallIcon className="icon" />
            <div class="tooltip">
              <p>
                <button
                  className="copyText"
                  onClick={copyFunction}
                  onMouseOut={outFunc}
                  onKeyDown={copyFunction}
                  onBlur={() => void 0}
                >
                  <span class="tooltiptext" id="myTooltip">
                    Click to copy
                  </span>
                  1 800 233 6542
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Can be straighter and more in line, but you need to make table for that... */}
      <section className="contactPage-section-2">
        <StaticImage
          className="image_na"
          width="500"
          height="500"
          src="../images/NA.png"
        />
        <div>
        <h3>Locations</h3>
        <h4>EU</h4>
        <div className="locations-flex">
          {/* left */}
          <ul>
            <li>
              <LocationOnIcon className="icon" />
              <p>Londen, United Kingdom</p>
            </li>
            <li>
              <LocationOnIcon className="icon" />
              <p>Brussels, Belguim</p>
            </li>
            <li>
              <LocationOnIcon className="icon" />
              <p>Oslo, Norway</p>
            </li>
            <li>
              <LocationOnIcon className="icon" />
              <p>Monaco-ville, Monaco</p>
            </li>
          </ul>
          {/* right */}
          <ul>
            <li>
              <SignpostIcon className="icon" />
              <p>43 Egerton Cres</p>
            </li>
            <li>
              <SignpostIcon className="icon" />
              <p>Bodegemstraat 52</p>
            </li>
            <li>
              <SignpostIcon className="icon" />
              <p>Schweigaards gate 13</p>
            </li>
            <li>
              <SignpostIcon className="icon" />
              <p>2 Rue des Princes</p>
            </li>
          </ul>
        </div>
        <h4>NA</h4>
        <div className="locations-flex">
          {/* left */}
          <ul>
            <li>
              <LocationOnIcon className="icon" />
              <p>Winnipeg, Canada</p>
            </li>
            <li>
              <LocationOnIcon className="icon" />
              <p>North Dakota, United states</p>
            </li>
            <li>
              <LocationOnIcon className="icon" />
              <p>Minneapolis, United states</p>
            </li>
          </ul>
          {/* left */}
          <ul>
            <li>
              <SignpostIcon className="icon" />
              <p>40 Scurfield Blvd</p>
            </li>
            <li>
              <SignpostIcon className="icon" />
              <p>4041 West 17th Ave Fargo</p>
            </li>
            <li>
              <SignpostIcon className="icon" />
              <p>2417 Rhode Island Ave S</p>
            </li>
          </ul>
        </div>
        </div>
        <StaticImage
          className="image_eu"
          width="500"
          height="500"
          src="../images/EU.png"
        />
        </section>
    </Layout>
  )
}

export default ContactPage
