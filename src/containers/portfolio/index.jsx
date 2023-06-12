import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import PageHeaderContent from '../../components/pageheadercontent'
import Imageone from '../../images/Imageone.jpeg'
import Imagetwo from '../../images/Imagetwo.jpg'
import Imagethree from '../../images/Imagethree.jpg'
import Imagefour from '../../images/Imagefour.png'
import Imagefive from '../../images/Imagefive.jpg'
import './styles.scss'
import { useState } from "react";


const portfoliodata=[
    {
        id:2,
        name:'Development Phase',
        image:Imageone,
        link:''
    },

    {
        id:3,
        name:'Ecommerce',
        image:Imagethree,
        link:''
    },

    {
        id:3,
        name:'Design Structure',
        image:Imagetwo,
        link:''
    },

    {
        id:2,
        name:'Frontend',
        image:Imagefour,
        link:''
    },

    {
        id:2,
        name:'Backend',
        image:Imagefive,
        link:''
    },

];

const filterdata=[
    {
        filterId:1,
        label:'All',
    },

    {
        filterId:2,
        label:'Development',
    },

    {
        filterId:3,
        label:'Design',
    },
];

const Portfolio=()=>{

    const [filterValue, setFilterValue]=useState(1);
    const [mousevalue, setMouseValue]=useState(null)
    function handleFilter(currentId){
        setFilterValue(currentId);
    }
    function handleOver(i){
        setMouseValue(i);
    }

    const filterIdValued=filterValue===1 ? portfoliodata : 
     portfoliodata.filter(item=>item.id===filterValue);

     
    return(
        <section id="portfolio" className="portfolio">
        <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40}/>}/>

        <div className="portfolio__content">
            <ul className="portfolio__content__filter">
                {
                   filterdata.map((item,j)=>(
                        <li key={j} className={item.filterId===filterValue ? 'active':''} onClick={()=>handleFilter(item.filterId)}>
                            {item.label}
                        </li>))
                }
            </ul>
        </div>

        <div className="portfolio__content__cards">
            {
            filterIdValued.map((item,i)=>(
                <div  className="portfolio__content__cards__item" key={item.name.trim()}
                onMouseEnter={()=>handleOver(i)}
                onMouseLeave={()=>handleOver(null)}>
                       <div  className="portfolio__content__cards__item__image-wrapper">
                     <a>
                        <img src={item.image}/>
                     </a>
                    </div> 
                    <div className="overlay">
                        {
                            i===mousevalue &&
                            <div>
                                <p>{item.name}</p>
                                <button>Visit</button>
                            </div>
                        }
                        
                    </div>
                </div> 
            ))}
        </div>

    </section>
    );
}

export default Portfolio;