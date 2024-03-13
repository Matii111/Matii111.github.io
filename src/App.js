import './index.css';
import working from './imgs/working.jpg';
import git from './imgs/git.png';
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
        </div> */}
      </body>
    </div>
  );
}

export default App;

