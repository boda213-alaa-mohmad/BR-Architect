import Header from './components/header'
import Projects from './components/projects';
import About from './components/About'
import Contact from './components/contact'
import Footer from './components/footer'
export default function Home() {
  return (
    <div>
      <Header />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}