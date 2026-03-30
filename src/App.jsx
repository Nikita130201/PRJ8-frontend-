import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Security from './components/Security/Security.jsx';
import Economy from './components/Economy/Economy.jsx';
import Equipment from './components/Equipment/Equipment.jsx';
import Infrastructure from './components/Infrastructure/Infrastructure.jsx';
import GeoMap from './components/GeoMap/GeoMap.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Hero />
        <Security />
        <Economy />
        <Equipment />
        <Infrastructure />
        <GeoMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
