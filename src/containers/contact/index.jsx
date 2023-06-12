import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../components/pageheadercontent'
import { Animate } from "react-simple-animate";
import './styles.scss'

const Contact=()=>{
    return(
        <section id="contact" className="contact">
        <PageHeaderContent
        headerText="Contact"
        icon={<BsInfoCircleFill size={40}/>}/>

        <div className="contact__content">
            <Animate
            play
            duration={1}
            delay={0}
            start={{
                transform:'translateX(-200px)'
            }}
            end={{
                transform:'translateX(0px)'
            }}>
                <h3   className="contact__content__header-text">
                    Lets Talk
                </h3>

            </Animate>

            <Animate
            play
            duration={1}
            delay={0}
            start={{
                transform:'translateX(200px)'
            }}
            end={{
                transform:'translateX(0px)'
            }}>
                <div className="contact__content__form">
                    <div  className="contact__content__form__controlwrapper">
                        <div className="namewrapper">
                        <label htmlFor="name" className="nameLabel">Name</label>

                            <input type={'text'} className="inputName" name="name"/>
                        </div>
                        <div className="emailwrapper">
                        <label htmlFor="email" className="emailLabel">Email</label>

                        <input type={'email'} className="inputEmail" name="email"/>
                        </div>
                        
                    </div>
                    <button>Submit</button>

                </div>
                </Animate>

        </div>

    </section>
    );
}

export default Contact;