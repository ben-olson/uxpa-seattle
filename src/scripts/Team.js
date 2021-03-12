import React, {useState} from 'react';
// import ReactMarkdown from 'react-markdown';
// import officer from '../officers/allan-luik.md'

function Team() {
  const officerArray = ['../officers/allan-luik.md','../officers/briend-thompson.md','../officers/di-dang.md']
  const importAll = (r) => r.keys().map(r);
  // const markdownFiles = importAll(require.context('../officers', false, /\.md$/))
  //   .sort()
  //   .reverse();

  const [officers, setOfficers] = useState([]);

  const parseOfficers = async() => {
    const posts = await Promise.all(officerArray.map((file) => fetch(file).then((res) => res.text())))
      .catch((err) => console.error(err));
    setOfficers(posts);
    console.log(officers);
  }

  return (
    <article className="[ team ] [ flow:wide ]">
      <div className="[ container ] [ flex:column ]">
        <h2 className="[ heading ]">Meet the Team!</h2>
        <button onClick={parseOfficers}>Test Officers</button>
        <div>{officers}</div>
      </div>
    </article>
  )

}

export default Team
