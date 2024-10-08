import SummaryData from "./summaryData";
function SummarySection({ isTraslatedLanguage }) {
    return (
        <div className='summary-container'>
            <div className='summary-title'>
                {isTraslatedLanguage ? (
                    //eng version
                    <p>
                        About me &gt;&gt;
                    </p>
                ) :
                    //spa version
                    <p>
                        Sobre mi &gt;&gt;
                    </p>
                }

            </div>
            <div className='sumaries-container'>
                {SummaryData.map((data, index) => {
                    return (
                        <div key={index}>
                            {
                                data.id === 'leftContent' ? (
                                    <div className='summary-left'>
                                        {isTraslatedLanguage ? (
                                            <p>
                                                {data.contentEn}
                                            </p>
                                        ) : <p>
                                            {data.content}
                                        </p>
                                        }
                                    </div>
                                ) : data.id === 'rightContent' ? (
                                    <div className='summary-right'>
                                        {isTraslatedLanguage ? (
                                            <p>
                                                {data.contentEn}
                                            </p>
                                        ) : <p>
                                            {data.content}
                                        </p>
                                        }
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
                                    >
                                        {isTraslatedLanguage ? (
                                            //eng version
                                            <p>Personal Summary &gt;&gt;</p>
                                        ) :
                                            //spa version
                                            <p>Curriculum resumen &gt;&gt;</p>
                                        }
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