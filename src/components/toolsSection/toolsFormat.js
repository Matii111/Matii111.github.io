import ToolsIcons from "./toolsData";
import { TextDisplay } from "../../utils/textDisplay";
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
                        <TextDisplay text={specialitiesContent[0].titleEng} />
                    </p>
                ) :
                    <p>
                        <TextDisplay text={specialitiesContent[1].titleEsp} />
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