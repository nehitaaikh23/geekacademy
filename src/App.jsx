import React, {useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';

const App = () => {

  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title
        title = 'Our Programs'
        subtitle = 'What We Offer'
        />
        <Programs />
        <About setPlayVideo={setPlayVideo} />
        <Title
        title = 'Our Gallery'
        subtitle = 'Around the Geek Arena'
        />
        <Campus />
        <Title
        title = 'SAY GEEK'
        subtitle = 'What the Geeks Say'
        />
        <Testimonials />
        <Title
        title = 'Hit Us Up'
        subtitle = 'Get In Touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playVideo={playVideo} setPlayVideo={setPlayVideo}/>
    </div>
  )
}

export default App;
