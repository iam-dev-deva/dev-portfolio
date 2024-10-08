import { animated, useSpring } from 'react-spring';
import CountUp from 'react-countup';

const CountUpWrapper = ({ start, end, delay, countUpRef }) => {
    return (
        <CountUp start={start} end={end} delay={delay} enableScrollSpy={true}>
            {({ countUpRef: internalRef }) => (
                <span ref={countUpRef || internalRef} />
            )}
        </CountUp>
    );
};
const AnimatedFill = ({ width, triggerAnimation, title }) => {
    const animatedWidth = useSpring({
        width: triggerAnimation ? width : '10%',
        from: { width: '0%' },
        config: { duration: 1000 },
    });

    return (
        <div>
            <span className='progressTitle'>{`${title}`}</span>
            <span className="progressText">{`${width}`} </span>
            <div className="skill-bar">
                <animated.div className="skill-bar-fill" style={{ width: animatedWidth.width }}>
                </animated.div>
            </div>
        </div>
    );
};
const IconWithText = ({ icon: Icon, skillName, color }) => {
    return (
        <div className="skills-data">
            <Icon style={{ color }} />
            <span>{skillName}</span>
        </div>
    );
};

export { AnimatedFill, CountUpWrapper, IconWithText };