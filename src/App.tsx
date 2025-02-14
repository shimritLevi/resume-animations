import './App.css';
import { ContactDetails } from './components/ContactDetails/ContactDetails';
import { Education } from './components/Education/Education';
import { ProfessionalExperience } from './components/ProfessionalExperience/ProfessionalExperience';
import { Summary } from './components/Summary/Summary';
import { TechnicalSkills } from './components/TechnicalSkills/TechnicalSkills';
import { Title } from './components/Title/Title';

function App() {

  return (
    <div className="main-container">
      <Title />
      <ContactDetails />
      <div className="content-container px-5">
        <Summary />
        <div className="content">
          <div className="side1">
            <div className="section">
              <ProfessionalExperience />
            </div>
          </div>
          <div className="side2">
            <div className="section">
              <TechnicalSkills />
            </div>
            <div className="section">
              <Education />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
