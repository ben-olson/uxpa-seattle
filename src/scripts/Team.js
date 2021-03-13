import React, {useState} from 'react';


function Team() {

  // const officerArray = ['/static/media/allan-luik.md','../officers/briend-thompson.md','../officers/di-dang.md']

  const importAll = (r) => r.keys().map(r);
  const officers = importAll(require
    .context('../officers', false, /\.json$/));

  console.log(officers);

  return (
    <article className="[ team ] [ flow:wide ]">
      <div className="[ container ] [ flex:column ] [ flow ]">
        <h2 className="[ heading ]">Meet the Team!</h2>
        {officers.map((p,i) => {
          return (

          <section key={i} className="[ officer ] [ card ] [ flex ]">
            <div style={{ backgroundImage:`url(${window.location.origin + p.avatar})` }} className="[ officer__img ]">
            </div>
            <div className="[ officer__meta ] [ flow:tight ]">
              <h3 className="[ font-size:s1 ]">{p.name}</h3>
              <br />
              <p className="[ description ] [ font-size:s-1 ]">{p.role}</p>
              <p className="[ source ][ font-size:s-1 ]">{p.job}</p>
            </div>
          </section>

          )
        })}
      </div>
    </article>
  )

}

export default Team
