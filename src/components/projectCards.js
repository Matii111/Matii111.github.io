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

        </div>
    );
}

export default ProjectCard;