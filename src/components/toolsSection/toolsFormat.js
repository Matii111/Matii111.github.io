import ToolsIcons from "./toolsData";
function ToolsIconsFormat() {
    return (
        <>
            <div className='tools-title'>
                <div className='circle-title' ></div>
                <hr className='left-hr' />
                <p>
                    Especialidades
                </p>
                <hr className='right-hr' />
            </div>
            <div className='tools-content'>
                {ToolsIcons.map((tools, index) => (
                    <div className='tool-item' key={index}>
                        <img src={tools.image} alt={tools.titulo} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default ToolsIconsFormat;