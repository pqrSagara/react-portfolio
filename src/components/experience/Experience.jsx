import React from 'react'
import './experience.css'
import { MdComputer } from 'react-icons/md'
import { MdSchool } from 'react-icons/md'
import { timelineElements } from './timelineElements.js'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
    let iconStyle = { background: '#11171F' };


    return (
        <section id="experience">
            <div className='container'>
                <h1>Experience <br />&<br /> Education</h1>
                <VerticalTimeline lineColor='#4db5ff'>
                    {timelineElements.map((element) => {
                        let isWorkIcon = element.icon === "work";

                        return (
                            <VerticalTimelineElement
                                key={element.key}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={iconStyle}
                                icon={isWorkIcon ? <MdComputer /> : <MdSchool />}
                            >
                                <h3 className='vertical-timeline-element-title'>
                                    {element.title}</h3>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {element.location}
                                </h5>
                                <p id="description">{element.description}</p>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </section >
    )
}

export default Experience