import intro from '../static/intro.svg'
import Button from './Button';

function Intro() {
  return (
    <div className="[ intro ] [ topic ] [ flex ]">
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
          <Button href = "https://www.facebook.com/groups/uxpaseattle/" display = "Join our Facebook Group" newtab= {true} />
          <br />
          <br />
          <Button href = "https://www.meetup.com/User-Experience-Professionals-Association-UXPA-Seattle/" display = "Follow our Meetup Page" newtab= {true} />
        </article>
        <img src={intro} alt="UXPA Intro Graphic" />
      </div>
  )
}

export default Intro;