import './index.css';
import working from './imgs/working.jpg';
import git from './imgs/git.png';
import ProjectCard from './components/featuredProjects/projectCardsFormat';
import CareerCard from './components/careerCards';
import ToolsIcons from './components/toolsSection/toolsFormat';
import Footer from './components/footer';
import PresentationLabel from './components/presentationLabel';
import LanguageChanger from './components/languageChanger';
function App() {
  return (
    <div>
      <body>
        {/* <div className="containerWorking">
          <div className="image-containerWorking">
            <img className="pfp" src={working}/>
          </div>
          <p className="workingPhrase">404 - Work in progress</p>
          <a href="https://github.com/Matii111" rel="noreferrer">
            <img className="git" src={git} />
          </a>
        </div> */}
        <div>
          <LanguageChanger />
          <PresentationLabel />
          <div className='content-container'>
            <ProjectCard />
            <div className='career-container'>
              <p className='career-title'>
                Trayectoria
              </p>
              <hr className='career-title-hr' />
              <p className='career-subtitle'>
                Formacion
              </p>
              <hr className='career-subtitle-hr' />
              <div className='career-content-container'>
                <h3 className='career-content-title'>Formacion 1</h3>
                <CareerCard />
              </div>
              <hr className='divisor-bar'></hr>
            </div>
            <div className='tools-container'>
              <ToolsIcons />
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </div>
  );
}

export default App;

