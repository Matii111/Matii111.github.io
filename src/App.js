import './index.css';

function App() {
  return (
    <div>
      <body>
        <div className="containerWorking">
          <div className="image-containerWorking">
            <img className="pfp" src="./components/imgs/working.jpg" alt="Circular Image" />
          </div>
          <p className="workingPhrase">404 - Work in progress</p>
          <a href="https://github.com/Matii111" rel="noreferrer">
            <img className="git" src="./components/imgs/git.png" />
          </a>
        </div>
      </body>
    </div>
  );
}

export default App;

