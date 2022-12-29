import * as React from "react"
import "./layout.css"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import PinterestIcon from "@mui/icons-material/Pinterest"

// #home is not defined and "#" & "" gives warnings

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-start">
        <ul>
          <h4>Wiz</h4>
          <li>
            <a href="#home">careers</a>
          </li>
          <li>
            <a href="#home">partners</a>
          </li>
          <li>
            <a href="#home">legal</a>
          </li>
          <li>
            <a href="#home">documentation</a>
          </li>
          <li>
            <a href="#home">other</a>
          </li>
        </ul>
        <ul>
          <h4>Global impact</h4>
          <li>
            <a href="#home">social impact</a>
          </li>
          <li>
            <a href="#home">community impact</a>
          </li>
          <li>
            <a href="#home">economic impact</a>
          </li>
          <li>
            <a href="#home">research</a>
          </li>
        </ul>
        <ul>
          <h4>Support</h4>
          <li>
            <a href="#home">FAQ</a>
          </li>
          <li>
            <a href="#home">helpcenter</a>
          </li>
        </ul>
      </div>
      <div className="footer-end">
        <ul>
          <li>
            <a href="#home">&copy;2022 Wiz</a>
          </li>
          <li>
            <a href="#home">terms of service</a>
          </li>
          <li>
            <a href="#home">privacy policy</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="https://facebook.com">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com">
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href="https://pinterest.com">
              <PinterestIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Footer
