import React from "react";
import PageHeaderContent from "../../components/pageheadercontent";
import {BsInfoCircleFill} from 'react-icons/bs'
import {Animate} from 'react-simple-animate'
import './styles.scss'
import {DiApple, DiAndroid} from 'react-icons/di'
import {FaDev,FaDatabase} from 'react-icons/fa'


const personalDetails=[
    {
        label: "Name",
        value:"Bharath"
    },
    {
        label: "Age",
        value:22
    },
    {
        label: "Phone Number",
        value:"799XXXXX"
    },
    {
        label: "Gender",
        value:"Male"
    },

    {
        label: "Address",
        value:"Hyderabad"
    },
];

const jobSummary="Fresher looking for a job opportunity to explore my skills in real life projects. I'm a dedicated person and i have a lot of confidence in me. I think this job role is fit for me.";
const About=()=>{
    return(
        <section id="about" className="about">
            <PageHeaderContent
            headerText="About Me"
            icon={<BsInfoCircleFill size={40}/>}/>

            <div className="about__content">
            <div className="about__content__personalWrapper">
            <Animate
            play 
            duration={1.5}
            delay={1}
            start={{
                transform:'translateX(-900px)'

            }}
            
            end={{
                transform:'translateX(0px)'
            }}>
                

                <h3>Frontend Developer</h3>
                <p>{jobSummary}</p>
                </Animate>


                <Animate
            play 
            duration={1}
            delay={0.5}
            start={{
                transform:'translateX(500px)'

            }}
            
            end={{
                transform:'translateX(0px)'
            }}>
                
                <h3 class="personalInformation">Personal Information</h3>
                <ul>
                    {
                        personalDetails.map((item,i)=>(
                            <li key={i}>
                                <span className="title">{item.label}</span>
                                <span className="value">{item.value}</span>


                            </li>
                        ))
                    }
                </ul>
                </Animate>

            </div>
            <div className="about__content__servicesWrapper">
            <Animate
            play 
            duration={1}
            delay={0.5}
            start={{
                transform:'translateX(500px)'

            }}
            
            end={{
                transform:'translateX(0px)'
            }}>

                <div className="about__content__servicesWrapper__innercontent">

                <div>
                    <FaDev size={60} color="#ffdd40"/>
                </div>

                <div>
                    <FaDatabase size={60} color="#ffdd40"/>
                </div>

                <div>
                    <DiAndroid size={60} color="#ffdd40"/>
                </div>

                <div>
                    <DiApple size={60} color="#ffdd40"/>
                </div>
                
                </div> 
                </Animate>
            </div>
            </div>

        </section>


    );
}

export default About;