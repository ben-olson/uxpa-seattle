import './styles/App.css'
import Intro from './scripts/Intro'
import Contact from './scripts/Contact'
import Footer from './scripts/Footer'
import Header from './scripts/Header'
import Events from './scripts/Events'

function Home() {
  return (
    <div id="#top" className="[ App ] [ flow:wide ]">
      <Header />
      <Intro />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
