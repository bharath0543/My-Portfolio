import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.scss'
import {Animate} from 'react-simple-animate'
const Home=()=>{
    const navigation=useNavigate();
    const handleNavigateToContactMe=()=>{
        navigation('/contact');

    }
    return(
        <section id="home" className="home">
            <div className="home__text--wrapper">
                <h1>
                    Hello I'm Bharath
                    <br/>
                    Frontend Developer
                </h1>
            </div>
            <Animate
            play 
            duration={1.5}
            delay={1}
            start={{
                transform:'translateY(550px)'

            }}
            
            end={{
                transform:'translateX(0px)'
            }}>
            <div className="home__contact-me">
                <button onClick={handleNavigateToContactMe}>HireMe</button>
            </div>
            </Animate>
           
        </section>
       
    );
}

export default Home;