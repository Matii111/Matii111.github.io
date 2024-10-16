import CareerData from "./careerData";
import { Fade } from "react-awesome-reveal";
import { DelayedText } from '../../utils/traslator.js';
const TitleFixer = ({ featured_description }) => {
    const featuredTitleLong = featured_description.length > 11;

    return (
        <p className={featuredTitleLong ? 'horizontal-hr-long' : ""}>
            {featured_description}
        </p>
    );
}

function CareerCard({ isTraslatedLanguage }) {
    return (
        <>
            {CareerData.map((content, index) => {
                return (
                    <div className='career-content' key={index}>
                        <div>
                            {isTraslatedLanguage ? (
                                <p className='career-content-title'>
                                    <Fade
                                        direction='down'
                                        className='fade-effect'
                                        triggerOnce='true'
                                        fraction='1'
                                    >
                                        <DelayedText
                                            text={content.formation_title_en}
                                        />

                                    </Fade>
                                </p>
                            ) :
                                <p className='career-content-title'>
                                    <Fade
                                        direction='down'
                                        className='fade-effect'
                                        triggerOnce='true'
                                        fraction='1'
                                    >
                                        <DelayedText
                                            text={content.formation_title}
                                        />
                                    </Fade>
                                </p>
                            }
                        </div>
                        <Fade
                            direction='down'
                            className='fade-effect'
                            triggerOnce='true'
                            fraction='1'
                        >
                            <div className='career-line'>
                                <div className='career-start-line'>
                                    <div className='circle-title' />
                                    <p>
                                        <DelayedText
                                            text={content.start_year}
                                        />
                                    </p>
                                </div>
                                <hr className='career-long-hr'></hr>
                                <div className='career-end-line'>
                                    <div className='circle-title' />
                                    <p>
                                        <DelayedText
                                            text={content.end_year}
                                        />
                                    </p>
                                </div>
                                <div className='career-featured-container'>
                                    {isTraslatedLanguage ? (
                                        content.formation_content_en.map((featured, index) => (
                                            <div className='career-featured-content'
                                                style={index === 2 ? { marginLeft: '5rem' } : {}}
                                                key={index}>
                                                <hr className='diagonal-hr'></hr>
                                                <div className='circle-title' />
                                                <div className='horizontal-hr'>
                                                    <hr />
                                                    <TitleFixer featured_description=
                                                        {
                                                            <DelayedText
                                                                text={featured.description}
                                                            />} />
                                                </div>
                                                <p>
                                                    <DelayedText
                                                        text={featured.year}
                                                    />
                                                </p>
                                            </div>
                                        ))
                                    ) :
                                        content.formation_content.map((featured, index) => (
                                            <div className='career-featured-content'
                                                style={index === 2 ? { marginLeft: '5rem' } : {}}
                                                key={index}>
                                                <hr className='diagonal-hr'></hr>
                                                <div className='circle-title' />
                                                <div className='horizontal-hr'>
                                                    <hr />
                                                    <TitleFixer featured_description=
                                                        {
                                                            <DelayedText
                                                                text={featured.description}
                                                            />
                                                        } />
                                                </div>
                                                <p>
                                                    <DelayedText
                                                        text={featured.year}
                                                    />
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </Fade>
                        <div className='career-content-description'>
                            <p>
                                <Fade
                                    direction='down'
                                    className='fade-effect'
                                    triggerOnce='true'
                                    fraction='0'
                                >
                                    {isTraslatedLanguage ? (
                                        content.formation_description_en.map((text, index) => (
                                            <div className="formation_description" key={index}>
                                                {
                                                    text.type === 'title' ? (
                                                        <div className="formation_description-title">
                                                            <div class="circle-title" />
                                                            <p className="title">
                                                                <DelayedText
                                                                    text={text.content}
                                                                />
                                                            </p>
                                                        </div>
                                                    ) :
                                                        text.type === 'paragraph' ? (
                                                            <p className="paragraph">
                                                                <DelayedText
                                                                    text={text.content}
                                                                    delay={5}
                                                                />
                                                            </p>
                                                        ) : null
                                                }
                                            </div>
                                        ))


                                    ) :
                                        content.formation_description.map((text, index) => (
                                            <div className="formation_description" key={index}>
                                                {
                                                    text.type === 'title' ? (
                                                        <div className="formation_description-title">
                                                            <div class="circle-title" />
                                                            <p className="title">
                                                                <DelayedText
                                                                    text={text.content}                                                                   
                                                                />
                                                            </p>
                                                        </div>
                                                    ) :
                                                        text.type === 'paragraph' ? (
                                                            <p className="paragraph">
                                                                <DelayedText
                                                                    text={text.content}
                                                                    delay={5}
                                                                />
                                                            </p>
                                                        ) : null
                                                }
                                            </div>
                                        ))
                                    }

                                </Fade>
                            </p>
                        </div>
                    </div >
                );
            })}
        </>
    );
}

export default CareerCard;