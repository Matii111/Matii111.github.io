import ToolsIcons from "./toolsData";

function ToolsIconsFormat({ isTraslatedLanguage }) {
    return (
        <>
            <div className='tools-title'>
                <div className='circle-title' />
                <hr className='left-hr' />
                {isTraslatedLanguage ? (
                    <p>
                        Specialities
                    </p>
                ) :
                    <p>
                        Especialidades
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