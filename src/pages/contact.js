import Layout from "../components/layout"
import React from "react"

const ContactPage = () => {
    return(
        <Layout>
            <div className="contact-container">
            <h2>Get in touch</h2>
            <form>
                <div className="flex-form-container">
                <div className="input-container">
                    <input type='text' required={true} />
                    <label></label>
                    <span>Name</span>
                </div>
                <div className="input-container">
                    <input type='text' required={true} />
                    <label></label>
                    <span>Email</span>
                </div>
                </div>
                <div className="input-container textarea">
                    <textarea type='textarea' required={true} />
                    <label></label>
                    <span>Message</span>
                </div>
                {/* netlify hidden input */}
                <input type="hidden" name="form-name" value="contact"></input> 
                <button type="submit" value="Submit">submit</button>
            </form>
            </div>
        </Layout>
    )
}

export default ContactPage