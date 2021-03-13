import intro from '../static/intro.svg'

function Intro() {
  return (
    <div className="[ intro ] [ flex ]">
        <article className="[ flow ]">
          <h2 className="[ caps ]">
            <span className="[ heading ]">Welcome to</span><br />
            <span className="[ font-size:s4 font:black ]">UXPA Seattle!</span>
          </h2>
          <p>
          We are a group of dedicated UX professionals who come together to promote social events, career workshops, portfolio reviews, and educational outreach to the greater Seattle area.
          </p>
          <p>
          Below, you can find a list of upcoming events that are open to the public.
          </p>
          <br />
          <a href="https://www.facebook.com/groups/uxpaseattle/" rel="noopener noreferrer" target="_blank">
            <button className="[ button ] [ font-size:s-1 font:bold ]">
              Join the Facebook Group
            </button>
          </a>
        </article>
        <img src={intro} alt="UXPA Intro Graphic" />
      </div>
  )
}

export default Intro;