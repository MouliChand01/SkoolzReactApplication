import React, { useState } from "react";
import FooterComponent from "../Footer/Footer";
import Header from "../Header/Header";
import CardFilter from "./CardComponent/CardComponent";
import ListFilter from "./SideListFilter/SideListFilter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'

<FontAwesomeIcon icon="fa-brands fa-whatsapp" />
import "./SearchSchools.css"

const SearchSchools = () => {
    const [display, setDisplay] = useState(false)
    const Toggle = () => {
        return setDisplay(!display)
    }
    return (
        <div>
            <div className="schoolSearch">
                <Header />
                <br /><br /><br />
                <div className="container grid">
                    <div className="row">
                        <div className="col-md-12 col-lg-4 col-xl-3 SearchFilter">
                            <ListFilter />
                        </div>
                        <div className="col-md-12 col-lg-8 col-xl-9 cardFilter">
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
            {/* model box for small device */}
            {display && (
                <div className="modelbox">
                    <div className={`model ${display && 'show'}`} modelFilter id="modelFilter">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <ListFilter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default SearchSchools;