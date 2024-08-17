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
                    <div className='tool-item' key={index}>
                        <tools.image className='tool-logo' alt={tools.titulo} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ToolsIconsFormat;