import React, {useState} from 'react';


function Team() {

  // const officerArray = ['/static/media/allan-luik.md','../officers/briend-thompson.md','../officers/di-dang.md']

  const importAll = (r) => r.keys().map(r);
  const markdownFiles = importAll(require
    .context('../officers', false, /\.md$/))
    .map(file => file.default);

  const [officers, setOfficers] = useState([{}]);

  async function getOfficers() {
    const posts = await Promise.all(markdownFiles
      .map((file) => fetch(file)
      .then((res) => {
        res.json();
        console.log(res);
      })))
      .catch((err) => console.error(err));
    setOfficers(posts);
  }

  return (
    <article className="[ team ] [ flow:wide ]">
      <div className="[ container ] [ flex:column ]">
        <h2 className="[ heading ]">Meet the Team!</h2>
        <button onClick={getOfficers}>Click Me</button>
        {officers.map((p,i) => {
          return (
            // <ReactMarkdown key={i} >{p}</ReactMarkdown>
          <section key={i} className="[ officer ] [ flex ]">
            <div className="[ event__img ]">
            </div>
            <div className="[ event__meta ] [ flow:tight ]">
              <h3 className="[ font-size:s1 ]">{p}</h3>
              <p className="[ caps ]"><span className="[ date ]">Nov. 14, 2020</span>&nbsp;&middot;&nbsp;<span className="[ location ]">Online Event</span></p>
              <p className="[ description ] [ font-size:s-1 ]">This is an example description for an upcoming event. The text should span no more than two lines.</p>
              <p className="[ source ][ font:bold font-size:s-1 ]">Created by Puget Sound World Usability Day</p>
            </div>
          </section>
          )
        })}
      </div>
    </article>
  )

}

export default Team
