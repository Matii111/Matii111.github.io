import project from '../imgs/1280x720.svg';
function ProjectCard() {
    return (
        <div className='project-card'>
            <h1 className='project-title'>
                Proyecto
            </h1>
            <hr></hr>
            <div className='project-info'>
                <div className='project-img-container'>
                    <img src={project} />
                </div>
                <div className='project-description'>
                    <p>
                        asssssssssssssassssssssss sssassssssss sssssasssss ssssssssa ssssss sssssssasssssssssssssasssssssssssssasssssssssssssasssssssssssssasssssssssssssasssssssssssssasssssssssssssasssssssssssssasssssssssssss
                    </p>
                </div>
            </div>
            <h1 className='project-title'>
                Trayectoria
            </h1>
            <hr></hr>
            <h2 className='project-title'>
                Trayectoria
            </h2>
            <hr></hr>
        </div>
    );
}

export default ProjectCard;