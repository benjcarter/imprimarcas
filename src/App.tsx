import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      {/* Header - Logo and Social Links */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl p-5"></main>

      <footer id="footer"></footer>
    </>
  );
}

export default App;
