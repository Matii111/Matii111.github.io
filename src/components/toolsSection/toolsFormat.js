import ToolsIcons from "./toolsData";
function ToolsIconsFormat() {
    return (
        <div className='tools-content'>
            {ToolsIcons.map((tools, index) => (
                <div className='tool-item' key={index}>
                    <img src={tools.image} alt={tools.titulo} />
                </div>
            ))}
        </div>
    );
}

export default ToolsIconsFormat;