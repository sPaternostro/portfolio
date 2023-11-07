import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Footer } from './Components/Footer';
import { FutureSkills } from './Components/FutureSkills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <FutureSkills />
      <Footer />
    </div>
  );
}

export default App;
