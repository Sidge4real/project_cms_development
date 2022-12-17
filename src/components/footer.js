import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import './layout.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () =>{
    return(
        <div className='footer'>
            <div className='footer-start'>
            <ul>
            <h4>Wiz</h4>
            <li>careers</li>
            <li>partners</li>
            <li>legal</li>
            <li>documentation</li>
            <li>other</li>
        </ul>
        <ul>
            <h4>Global impact</h4>
            <li>social impact</li>
            <li>community impact</li>
            <li>economic impact</li>
            <li>research</li>
        </ul>
        <ul>
            <h4>Support</h4>
            <li>FAQ</li>
            <li>helpcenter</li>
        </ul>
        </div>
        <div className='footer-end'>
        <ul>
            <li>&copy;2022 Wiz</li>
            <li>terms of service</li>
            <li>privacy policy</li>
        </ul>
        <ul>
            <li><FacebookIcon /></li>
            <li><InstagramIcon /></li>
            <li><TwitterIcon /></li>
            <li><LinkedInIcon /></li>
            <li><PinterestIcon /></li>
        </ul>
        </div>
        </div>
    )
}
export default Footer