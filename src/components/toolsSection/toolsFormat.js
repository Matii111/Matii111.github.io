import ToolsIcons from "./toolsData";
import { Fade } from "react-awesome-reveal";
function ToolsIconsFormat() {
    return (
        <>
            <div className='tools-title'>
                <div className='circle-title' />
                <hr className='left-hr' />
                <p>
                    Especialidades
                </p>
                <hr className='right-hr' />
            </div>
            <div className='tools-content'>
                {ToolsIcons.map((tools, index) => (
                    <Fade
                        direction='down'
                        className='fade-effect'
                        triggerOnce='true'
                        fraction='1'
                    >
                        <div className='tool-item' key={index}>
                            <img src={tools.image} alt={tools.titulo} />

                        </div>
                    </Fade>
                ))}
            </div>
        </>
    );
}

export default ToolsIconsFormat;