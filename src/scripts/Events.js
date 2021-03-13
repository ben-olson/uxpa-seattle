
function Events() {

  const importAll = (r) => r.keys().map(r);
  var events = importAll(require
    .context('../events', false, /\.json$/));

  events = events.map(event => {
    event.date = new Date(event.date);
    return event;
  });

  const currentDate = new Date();

  const eventsNew = events.map(event => {
    if (event.date >= currentDate) {
      return event;
    }
    return undefined;
  }).filter(value => value !== undefined);

  const eventsOld = events.map(event => {
    if (event.date < currentDate) {
      return event;
    }
    return undefined;
  }).filter(value => value !== undefined);

  // console.log(eventsNew);
  // console.log(eventsOld);

  return (

    <article className="[ events ] [ flow:wide ]">
      <div className="[ events__new ] [ container ] [ flex:column ] [ flow ]">
        <h2 className="[ heading ]">Upcoming Events</h2>
        
        {eventsNew.map((e,i) => {

          return (

            <a key={i} className="[ event ]" {... e.link ? {href: e.link} : {}} rel="no-opener noreferrer" target="_blank">

              <section className={`[ card ${e.link ? 'card__hover' : ''}  ] [ flex ]`}>
                <div style={{ backgroundImage:`url(${window.location.origin + e.thumbnail})` }}className="[ event__img ]"></div>
                <div className="[ event__meta ] [ flow:tight ]">
                  <h3 className="[ font-size:s1 ]">{e.title}</h3>
                  <p className="[ caps ]"><span className="[ date ]">{e.date.toDateString()}</span>&nbsp;&middot;&nbsp;<span className="[ location ]">{e.location}</span></p>
                  <p className="[ description ] [ font-size:s-1 ]">{e.excerpt}</p>
                  <p className="[ source ][ font:bold font-size:s-1 ]">Created by {e.organization}</p>
                </div>
              </section>

            </a>

          )
        })}

      </div>
      <div className="[ events__old ][ container ] [ flex:column ]">
        <h2 className="[ heading ]">Past Events</h2>
        {eventsOld.map((e,i) => {

        return (

          <a key={i} className="[ event ]" {... e.link ? {href: e.link} : {}} rel="no-opener noreferrer" target="_blank">

            <section className={`[ card ${e.link ? 'card__hover' : ''}  ] [ flex ]`}>
              <div style={{ backgroundImage:`url(${window.location.origin + e.thumbnail})` }}className="[ event__img ]"></div>
              <div className="[ event__meta ] [ flow:tight ]">
                <h3 className="[ font-size:s1 ]">{e.title}</h3>
                <p className="[ caps ]"><span className="[ date ]">{e.date.toDateString()}</span>&nbsp;&middot;&nbsp;<span className="[ location ]">{e.location}</span></p>
                <p className="[ source ][ font:bold font-size:s-1 ]">Created by {e.organization}</p>
              </div>
            </section>

          </a>

        )
        })}

      </div>
    </article>

  )

}

export default Events