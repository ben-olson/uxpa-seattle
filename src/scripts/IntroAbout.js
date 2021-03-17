import about from '../static/about.svg'

function IntroAbout() {
  return (
    <div className="[ intro ] [ topic ][ flex ]">
        <article className="[ flow ]">
          <h2 className="[ caps ]">
            <span className="[ heading ]">What is</span><br />
            <span className="[ font-size:s4 font:black ]">UXPA Seattle?</span>
          </h2>
          <p>
            We are a 501(c)(3) non-profit chapter of User Experience Professionals Association International serving the Greater Seattle area. We believe in friendly, inclusive, high-value events that help current practitioners, students, and other interested professionals learn more about the User Experience field.
          </p>
          <p> 
            We bring together UX researchers, designers, and writers, united in the common goal of creating an outstanding user experience. 
          </p>
        </article>
        <img src={about} alt="UXPA About Graphic" />
      </div>
  )
}

export default IntroAbout;