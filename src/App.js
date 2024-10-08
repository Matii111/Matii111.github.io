import './index.css';
import working from './imgs/working.jpg';
import git from './imgs/git.png';
import ToolsIcons from './components/toolsSection/toolsFormat';
import Footer from './components/footer';
import PresentationLabel from './components/presentationLabel';
import LanguageChanger from './components/languageChanger';
import CareerFormat from './components/careerSection/careerFormat';
import ProjectFormat from './components/featuredProjects/projectCardsFormat';
import GoTop from './utils/topButton';

import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div>
      <body>
        <div className="containerWorking">
          <div className="image-containerWorking">
            <img className="pfp" src={working} />
          </div>
          <p className="workingPhrase">404 - Work in progress</p>
          <a href="https://github.com/Matii111" rel="noreferrer">
            <img className="git" src={git} />
          </a>
        </div>
        {/* <div>
          <LanguageChanger />          
          <Fade
            direction='down'
            className='fade-effect'
            triggerOnce='true'
            fraction='1'
          >
            <PresentationLabel />
          </Fade>
          <GoTop />
          <div className='content-container'>
            <ProjectFormat />
            <div className='career-container'>
              <CareerFormat />
            </div>
            <div className='tools-container'>
              <ToolsIcons />
            </div>
          </div>
          <Fade
            direction='up'
            className='fade-effect'
            triggerOnce='true'
            fraction='0.5'
          >
            <Footer />
          </Fade>
        </div> */}
      </body >
    </div >
  );
}

export default App;