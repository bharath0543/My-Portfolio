import React from "react";
import PageHeaderContent from "../../components/pageheadercontent";
import {BsInfoCircleFill} from 'react-icons/bs'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {Data} from "./utility.js"
import  "react-vertical-timeline-component/style.min.css";
import './styles.scss'
import {MdWork} from 'react-icons/md'


const Resume=()=>{
    return(
        <section id="resume" className="resume">
        <PageHeaderContent
        headerText="Resume"
        icon={<BsInfoCircleFill size={40}/>}/>

        <div className="timeline">
            <div className="timeline__education">
                <h3 className="timeline__education__header-text">Education</h3>
                <VerticalTimeline
                layout={'1-column'}
                lineColor="#ffdd40">
                    {
                        Data.education.map((item,i)=>(
                            <VerticalTimelineElement
                            key={i}
                            className="timeline__education__vertical-timeline-element"
                            contentStyle={{
                                background:'none',
                                color:'#ffffff',
                                border:'1.5px solid #ffdd40',
                            }}
                            icon={<MdWork/>}
                            iconStyle={{
                                background:'#181818',
                                color:'#ffdd40',

                            }}
                            >
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3 className="vertical-timeline-element-title">
                                        {item.schoolName}
                                    </h3>

                                    <h4 className="vertical-timeline-element-subtitle">
                                        {item.year}
                                        <br></br>
                                        {item.course}
                                        <br></br>
                                        {item.percent}
                                    </h4>
                                </div>

                            </VerticalTimelineElement>
                        ))
                    }

                </VerticalTimeline>
            </div>
            <div className="timeline__experience">
            <h3 className="timeline__experience__header-text">Experience</h3>
            <VerticalTimeline
                layout={'1-column'}
                lineColor="#ffdd40">
                    {
                        Data.experience.map((item,i)=>(
                            <VerticalTimelineElement
                            key={i}
                            className="timeline__experience__vertical-timeline-element"
                            contentStyle={{
                                background:'none',
                                color:'#ffffff',
                                border:'1.5px solid #ffdd40',
                            }}
                            icon={<MdWork/>}
                            iconStyle={{
                                background:'#181818',
                                color:'#ffdd40',

                            }}
                            >
                                <div className="vertical-timeline-element-title-wrapper">
                                    <h3 className="vertical-timeline-element-title">
                                        {item.companyName}
                                    </h3>

                                    <h4 className="vertical-timeline-element-subtitle">
                                        {item.role}
                                        <br></br>
                                        {item.domain}
                                       
                                    </h4>
                                </div>

                            </VerticalTimelineElement>
                        ))
                    }

                </VerticalTimeline>
            </div>
        </div>

    </section>
    );
}

export default Resume;