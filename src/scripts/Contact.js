import contact from '../static/contact.svg'

function Contact() {
  return (
    <div className="[ contact ] [ topic ] [ flex ]">
      <img src={contact} alt="Contact Us Graphic" />
      <article className="[ flow ]">
          <h2 class="[ caps ]">
            <span className="[ heading ]">Looking to</span><br />
            <span className="[ font-size:s4 font:black ]">Chat with us?</span>
          </h2>
          <p>
          Whether it be about membership, sponsorship, or our favorite ice cream flavors, we want to hear from you! We try our best to get back to people in a timely manner, so please be patient as we answer inquiries.
          </p>
          <br />
          <form name="contact" action="POST" netlify class="[ flex:column flow ]">
            <p>
              <label>Name</label>
              <input type="text" name="name" />
            </p>
            <p>
              <label>Email</label>
              <input type="email" name="email" />
            </p>
            <p>
              <label>Message</label>
              <textarea type="text" name="message" />
            </p>
            <p>
              <button type="submit" className="[ button ] [ font-size:s-1 font:bold ]">Send Us Your Message!</button>
            </p>
          </form>
        </article>
    </div>
  )
}

export default Contact;