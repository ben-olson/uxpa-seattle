
import React, {useState} from 'react'

function Events() {
  const [loading, setLoading] = useState(false)
  const [events, setEvents] = useState(null)

  // async function getEvents(){
  //   setLoading(true)
  //   setEvents(null)
  //   let url = 
  //   url += 'api_key=' + 'jhQazp87aPuMIRIZoFu2kaI2Uk5GjZRJ'
  //   const r = await fetch(url)
  //   const j = await r.json()
  //   if(j.data) {
  //     setMemes(j.data)
  //     setLoading(false)
  //     setTerm(text)
  //     setText('')
  //   }
  // }

  return EventNew()


  function EventNew() {
    return (
      <a className="[ event ]" href="https://www.google.com" rel="no-opener noreferrer" target="_blank">
        <section className="[ flex ]">
          <div className="[ event__img ]">
          </div>
          <div className="[ event__meta ] [ flow:tight ]">
            <h3 className="[ font-size:s1 ]">Puget Sound World Usability Day. Puget Sound World Usability Day</h3>
            <p className="[ caps ]"><span className="[ date ]">Nov. 14, 2020</span>&nbsp;&middot;&nbsp;<span className="[ location ]">Online Event</span></p>
            <p className="[ description ] [ font-size:s-1 ]">This is an example description for an upcoming event. The text should span no more than two lines.</p>
            <p className="[ source ][ font:bold font-size:s-1 ]">Created by Puget Sound World Usability Day</p>
          </div>
        </section>
      </a>
    )
  }

  function EventOld() {
    return (         
      <a className="[ event ]" href="https://www.google.com" rel="no-opener noreferrer" target="_blank">
        <section className="[ flex ]">
          <div className="[ event__img ]">
          </div>
          <div className="[ event__meta ] [ flow:tight ]">
            <h3 className="[ font-size:s1 ]">Puget Sound World Usability Day</h3>
            <p className="[ caps ]">Nov. 14, 2020</p>
            <p className="[ source ][ font:bold font-size:s-1 ]">Created by Puget Sound World Usability Day</p>
          </div>
        </section>
      </a>
    )
  }
}

export default Events