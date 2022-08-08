import React, { useState } from "react";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import ModelListFilter from "./ModelListFilter/ModelListFilter";
import CardFilter from "./CardComponent/CardComponent";
import ListFilter from "./SideListFilter/SideListFilter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import "./SearchSchools.css"

const SearchSchools = () => {
    const [display, setDisplay] = useState(false)
    const Toggle = () => {
        return setDisplay(!display)
    }

    const Closemodel=()=>{
        setDisplay(false)
        
    }
    return (
        <div>
            <div className="schoolSearch">
                <HeaderComponent />
                <br /><br /><br />
                {display && (
                    <div className={`model ${display && 'show'}`} modelFilter id="modelFilter">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <ModelListFilter Closemodel={Closemodel}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}
                <div className="container grid">
                    <div className="row schools-container">
                        
                        <div className="col-md-12 col-lg-4 col-xl-3 SearchFilter searchFilterPad">
                            <ListFilter />
                        </div>
                        <div className="col-md-12 col-lg-8 col-xl-9 cardFilter" >
                            <CardFilter />
                        </div>
                        <div className="hidenIcons">
                            <div className="filterIcon">
                                <button data-toggle="modelFilter" data-target="#modelFilter" onClick={Toggle}><FontAwesomeIcon icon={faFilter} /></button>
                            </div>
                            <div className="chatIcon">
                                <button><FontAwesomeIcon icon={faWhatsapp} /> Chat with</button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <FooterComponent />
            </div>
           
        </div>
    )
}
export default SearchSchools;