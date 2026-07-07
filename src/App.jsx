
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact';
import Footer  from './sections/Footer/Footer.jsx';
// import CaseStudy from './pages/CaseStudy/index.jsx'; 
import ReactGA from 'react-ga4';
import LangaraConsultingCaseStudy from './pages/LangaraConsultingCaseStudy.jsx';

ReactGA.initialize('G-G1M4VVR77T'); 

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // This logs page views automatically whenever your React routes change
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);

  return null;
}


function Home() {
  return (
    <>
      <Hero/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

function App() {
    return(
        <Router>
        <Routes>
            {/* 🏠 Main Portfolio Route */}
            <Route path="/" element={<Home />} />

            {/* 📖 Dynamic Case Study Route (e.g., /project/march-madness) */}
            <Route path="/project/langara-consulting" element={<LangaraConsultingCaseStudy />} />        </Routes>
        </Router>
    );
}

export default App;
