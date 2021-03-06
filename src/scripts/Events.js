import {Link} from 'react-router-dom'

function Events() {

  const importAll = (r) => r.keys().map(r);
  var events = importAll(require
    .context('../events', false, /\.json$/));

  events = events.map(event => {
    event.date = new Date(event.date);
    if (event.thumbnail && event.thumbnail.startsWith('/uploads')) {
      event.thumbnail = window.location.origin + event.thumbnail;
      console.log(event.thumbnail);
    }
    return event;
  });

  const currentDate = new Date();

  var eventsNew = events.map(event => {
    if (event.date >= currentDate) {
      return event;
    }
    return undefined;
  }).filter(value => value !== undefined).sort((a, b) => b.date - a.date);

  var eventsOld = events.map(event => {
    if (event.date < currentDate) {
      return event;
    }
    return undefined;
  }).filter(value => value !== undefined).sort((a, b) => b.date - a.date);

  console.log(eventsNew);
  console.log(eventsOld);

  return (

    <article className="[ events ] [ flow:wide ]">
      <div className="[ events__new ] [ container ] [ flex:column ] [ flow ]">
        <h2 className="[ heading ]">Upcoming Events</h2>
        
        {!eventsNew.length ? <p className="[ font-size:s-1 ]">No upcoming events.</p> :
          eventsNew.map((e,i) => {

            return (

              <Link to={'/events/' + e.slug} key={i} className="[ event ]">

                <section className={`[ card card__hover ] [ flex ]`}>
                  <div style={{ backgroundImage:`url(${e.thumbnail})` }}className="[ event__img ]"></div>
                  <div className="[ event__meta ] [ flow:tight ]">
                    <h3 className="[ font-size:s1 ]">{e.title}</h3>
                    <p className="[ caps ]"><span className="[ date ]">{e.date.toDateString()}</span>&nbsp;&middot;&nbsp;<span className="[ location ]">{e.location}</span></p>
                    <p className="[ description ] [ font-size:s-1 ]">{e.excerpt}</p>
                    <br />
                    <p className="[ source ][ font:bold font-size:s-1 ]">Created by {e.organization}</p>
                  </div>
                </section>

              </Link>

            )
          }
        )}

      </div>
      <div className="[ events__old ][ container ] [ flex:column ] [ flow ]">
        <h2 className="[ heading ]">Past Events</h2>

        {!eventsOld.length ? <p className="[ font-size:s-1 ]">No past events.</p> :
          eventsOld.map((e,i) => {

            return (

              <Link to={'/events/' + e.slug} key={i} className="[ event ]">

                <section className="[ card card__hover ] [ flex ]">
                  <div style={{ backgroundImage:`url(${e.thumbnail})` }}className="[ event__img ]"></div>
                  <div className="[ event__meta ] [ flow:tight ]">
                    <h3 className="[ font-size:s1 ]">{e.title}</h3>
                    <p className="[ caps ]"><span className="[ date ]">{e.date.toDateString()}</span>&nbsp;&middot;&nbsp;<span className="[ location ]">{e.location}</span></p>
                    <br />
                    <p className="[ source ][ font:bold font-size:s-1 ]">Created by {e.organization}</p>
                  </div>
                </section>

              </Link>

            )
          }
        )}

      </div>
    </article>

  )

}

export default Events