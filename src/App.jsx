import Header from "./components/Header";
import Home from "./pages/home";
import Services from "./pages/services";
import About from "./pages/about";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#3B82F6]">
      <Header />
      <main className="flex-1">
        <Home />
        <Services />
        <About />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;