import Header from './scripts/Header'
import Footer from './scripts/Footer'
import ReactMarkdown from 'react-markdown'
import Button from './scripts/Button'

function Event(props) {
  
  const eventSlug = props.match.params.event || '';

  console.log("Event Slug: ", eventSlug);

  const importAll = (r) => r.keys().map(r);

  const events = importAll(require
    .context('./events/', false, /\.json$/));


  const findEvent = () => {
    for( var i = 0; i < events.length; i++) {
        if (events[i].slug && events[i].slug === eventSlug) return events[i];
    }
    return false;
  }

  const event = findEvent(); 

  return (
    <div id="#top" className="[ App ] [ flow:wide ]">
      <Header />
      <EventInfo event = {event} />
      <Footer />
    </div>
  )
}

function EventInfo(e) {
  var event = e.event;
  event.date = new Date(event.date);
  if (event.thumbnail && event.thumbnail.startsWith('/uploads')) {
    event.thumbnail = window.location.origin + event.thumbnail;
  }
  console.log(event);
  return (
  <div className="[ event ] [ flex:column flow:wide ]">
    <h2 className="[ title ] [ card ] [ font-size:s4 bold ] ">{event.title}</h2>
    <div className="[ event__container ] [ flex ]">
      <div className="[ border ]"></div>
      <div className="[ event__wrapper ] [ flex:column flow:wide ]">
        {event.thumbnail && <img src={event.thumbnail} alt={event.excerpt} className="[ event__img ]" />}
        <div className="[ event__overview ] [ flow ] [ container ]">
          <section className="[ card ] [ flow:tight ]">
            <h4 className="[ caps font:bold font-size:s-1 ]">Date &amp; time</h4>
            <p>{event.date.toDateString()}</p>
            <p>{event.time}</p>
          </section>
          <section className="[ card ] [ flow:tight ]">
            <h4 className="[ caps font:bold font-size:s-1 ]">Location</h4>
            <p>{event.location}</p>
            <p>{event.address}</p>
          </section>
          <section className="[ card ] [ flow:tight ]">
            <h4 className="[ caps font:bold font-size:s-1 ]">Organization(s)</h4>
            <p>{event.organization}</p>
          </section>
          <section className="[ card ] [ flow:tight ]">
            <h4 className="[ caps font:bold font-size:s-1 ]">Costs</h4>
            <p>{event.price}</p>
          </section>
          {event.link && <br />}
          {event.link && <Button href = {event.link} display = {event['link-display']} newtab= {true} />}
        </div>
        <div className="[ event__description event__meta ]">
          <ReactMarkdown>{event.markdown}</ReactMarkdown>
        </div>
      </div>
      <div className="[ border ]"></div>
    </div>
    
  </div>
  )
}

export default Event;