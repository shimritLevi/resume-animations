import './App.css';
import { Education } from './components/Education/Education';
import { ProfessionalExperience } from './components/ProfessionalExperience/ProfessionalExperience';
import { Summary } from './components/Summary/Summary';
import { TechnicalSkills } from './components/TechnicalSkills/TechnicalSkills';
import { Title } from './components/Title/Title';

function App() {

  return (
    <div className="main-container">
      <Title />
      <div className="content-container">
        <Summary />
        <ProfessionalExperience />
        <TechnicalSkills />
        <Education />
      </div>
    </div >
  );
}

export default App;
