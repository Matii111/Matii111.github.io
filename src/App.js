import './index.css';
import working from './imgs/working.jpg';
import git from './imgs/git.png';
import ProjectCard from './components/featuredProjects/projectCardsFormat';
import CareerCard from './components/careerCards';
import ToolsIcons from './components/toolsSection/toolsFormat';
import Footer from './components/footer';
function App() {
  return (
    <div>
      <body>
        <div className="containerWorking">
          <div className="image-containerWorking">
            <img className="pfp" src={working}/>
          </div>
          <p className="workingPhrase">404 - Work in progress</p>
          <a href="https://github.com/Matii111" rel="noreferrer">
            <img className="git" src={git} />
          </a>
        </div>
        {/* <div>
          <div className='language-changer'>
            <h1>current language</h1>
          </div>
          <div className='presentation-label'>
            <h1>Matias</h1>
          </div>
          <p className='section-title'>
            Proyecto destacado
          </p>
          <div className='content-container'>
            <ProjectCard />
            <div className='career-container'>
              <h1 className='career-title'>
                Trayectoria
              </h1>
              <hr className='career-title-hr' />
              <h2 className='career-subtitle'>
                Formacion
              </h2>
              <hr className='career-subtitle-hr' />
              <div className='career-content-container'>
                <h3 className='career-content-title'>Formacion 1</h3>
                <CareerCard />
              </div>
              <hr className='divisor-bar'></hr>
            </div>
            <div className='tools-container'>
              <h1 className='tools-title'>
                Tecnologias utilizadas
              </h1>
              <ToolsIcons />
            </div>
          </div>
          <Footer />
        </div> */}
      </body>
    </div>
  );
}

export default App;

