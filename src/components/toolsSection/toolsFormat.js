import ToolsIcons from "./toolsData";
import { DelayedText } from "../../utils/traslator";
const specialitiesContent = [
    { titleEng: "Specialities" },
    { titleEsp: "Especialidades" },
];
function ToolsIconsFormat({ isTraslatedLanguage }) {
    return (
        <>
            <div className='tools-title'>
                <div className='circle-title' />
                <hr className='left-hr' />
                {isTraslatedLanguage ? (
                    <p>
                        <DelayedText text={specialitiesContent[0].titleEng} />
                    </p>
                ) :
                    <p>
                        <DelayedText text={specialitiesContent[1].titleEsp} />
                    </p>
                }

                <hr className='right-hr' />
            </div >
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