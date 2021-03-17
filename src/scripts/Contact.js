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
          <a href="mailto:abc@uxpaseattle.org">
            <button className="[ button ] [ font-size:s-1 font:bold ]">
              Email Us Here
            </button>
          </a>
        </article>
    </div>
  )
}

export default Contact;