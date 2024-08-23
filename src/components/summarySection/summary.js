import SummaryData from "./summaryData";
function SummarySection() {
    return (
        <div className='summary-container'>
            <div className='summary-title'>
                <p>
                    Sobre mi &gt;&gt;
                </p>
            </div>
            <div className='sumaries-container'>
                {SummaryData.map((data, index) => {
                    return (
                        <div key={index}>
                            {
                                data.id === 'leftContent' ? (
                                    <div className='summary-left'>
                                        <p>
                                            {data.content}
                                        </p>
                                    </div>
                                ) : data.id === 'rightContent' ? (
                                    <div className='summary-right'>
                                        <p>
                                            {data.content}
                                        </p>
                                    </div>
                                ) : null
                            }
                        </div>
                    );
                })}
            </div>
            <div className='summary-curriculum'>
                {SummaryData.map((data, index) => {
                    return (
                        <div key={index}>
                            {
                                data.id === 'URL' ? (
                                    <a
                                        target="_blank" rel="noopener noreferrer"
                                        href={data.curriculumURL}
                                    > Curriculum resumen &gt;&gt;
                                    </a>
                                ) : null
                            }
                        </div>
                    );
                })}
            </div>
        </div >
    );
};
export default SummarySection;