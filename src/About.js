import './styles/App.css'
import IntroAbout from './scripts/IntroAbout'
import Contact from './scripts/Contact'
import Footer from './scripts/Footer'
import Header from './scripts/Header'
import Team from './scripts/Team'

function About() {
  return (
    <div id="#top" className="[ App ] [ flow:wide ]">
      <Header />
      <IntroAbout />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default About;
