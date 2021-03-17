import Header from './scripts/Header'
import Footer from './scripts/Footer'
// import ReactMarkdown from 'react-markdown'

function Event(props) {
  
  const eventSlug = props.match.params.event || '';

  const importAll = (r) => r.keys().map(r);

  const events = importAll(require
    .context('./events/', false, /\.json$/));


  const event = () => {
    for( var i = 0; i < events.length; i++) {
        if (events[i].slug && events[i].slug === eventSlug) return true;
    }
    return false;
  }

  console.log(event());

  return (
    <div id="#top" className="[ App ] [ flow:wide ]">
      <Header />
      <EventInfo  />
      <Footer />
    </div>
  )
}

function EventInfo(e) {

  return <div></div>
}

export default Event;