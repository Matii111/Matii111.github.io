import './index.css';
import working from './imgs/working.jpg';
import git from './imgs/git.png';
import ToolsIcons from './components/toolsSection/toolsFormat';
import Footer from './components/footer';
import PresentationLabel from './components/presentationLabel';
import LanguageChanger from './components/languageChanger';
import CareerFormat from './components/careerSection/careerFormat';
import ProjectFormat from './components/featuredProjects/projectCardsFormat';
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
            <ProjectFormat />
            <div className='career-container'>
                <CareerFormat />            
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

