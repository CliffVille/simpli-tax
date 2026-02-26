const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[calc(100dvh-5rem)] bg-[#3B82F6] flex items-center justify-center px-6"
    >
      <div className="max-w-5xl text-center">
        <h1
          className="text-white text-5xl md:text-7xl font-extrabold mb-4 tracking-[0.015em] leading-[1.08]"
        >
          <span className="text-yellow-400">Accounting,</span>&nbsp;made simple.
        </h1>
        <p className="text-sm md:text-2xl leading-relaxed text-white/90 max-w-3xl mx-auto">
          30+ years of expertise, dedicated to simplifying taxes and helping your business grow.
        </p>
      </div>
    </section>
  );
};

export default Home;