import Header from './Components/Header'
import Main from './Components/Main'
import Services from './Components/Services'
import About from './Components/About'
import Footer from './Components/Footer'

function App() {
  return (
    <>
    <Header />
    <div id="main">
      <Main />
    </div>
    <div id="services">
      <Services />
    </div>
    <div id="about">
      <About />
    </div>
    <Footer />
    </>
  );
}

export default App;
