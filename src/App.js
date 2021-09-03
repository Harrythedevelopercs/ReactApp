import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import HomeBanner from './Components/HomeBanner';
import HomeCarousel from './Components/HomePagecarousel';
import './Assets/css/main.css'
function App() {
  return (
    <div >
      <Header />
      <NavBar />
      <HomeBanner />
      <HomeCarousel />
    </div>
  );
}

export default App;
