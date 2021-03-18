import Header from './scripts/Header'
import Footer from './scripts/Footer'
import ReactMarkdown from 'react-markdown'

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
  <div className="[ event ] [ container ]">
    <div></div>
    <div className="[ event__description ] [ flow ]">
      <h3 className="[ font-size:s2 ]">{event.title}</h3>
      <p className="[ caps ]">{event.date.toDateString()}</p>
      <p>{event.time}</p>
      <div className="[ address ] [ caps ]">
        <p>{event.location}</p>
        <p>{event.address}</p>
      </div>
      <ReactMarkdown>{event.markdown}</ReactMarkdown>
      <br />
      <p className="[ source ][ font:bold font-size:s-1 ]">Created by {event.organization}</p>
    </div>
  </div>
  )
}

export default Event;