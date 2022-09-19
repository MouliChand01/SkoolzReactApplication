import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './TuitionsClass.css';

const TuitionsClassComp = () => {

    const buttonList = [
        {
            name: "Nursery-KG",
            isSelected: true
        },
        {
            name: "I",
            isSelected: false
        },
        {
            name: "II",
            isSelected: false
        },
        {
            name: "III",
            isSelected: false
        },
        {
            name: "IV",
            isSelected: false
        },
        {
            name: "V",
            isSelected: false
        },
        {
            name: "VI",
            isSelected: false
        },
        {
            name: "VII",
            isSelected: false
        },
        {
            name: "VIII",
            isSelected: false
        },
        {
            name: "IX",
            isSelected: false
        },
        {
            name: "X",
            isSelected: false
        },
        {
            name: "XI",
            isSelected: false
        },
        {
            name: "XII",
            isSelected: false
        }

    ];
    const [tuitionselected, setTuitionselected] = useState(buttonList);
    const [tuitionupdated, setTuitionupdated] = useState('Nursery-KG');
    const [trending, setTrending] = useState(true);
    const [selected, setSelected] = useState(false);
    const [role, setRole] = useState("Trending");

    const onSelected = (val) => {
        if (val === "nearMe") {
            setRole("nearMe")
            setSelected(true)
            setTrending(false)
        }
        else if (val === "Trending") {
            setRole("Trending")
            setSelected(false)
            setTrending(true)
        }
    }
    const tuttionClassesSelected = (tuition) => {
        const checked = tuitionselected[tuition];
        let data = tuitionselected.map((val)=>(val.name === checked.name ? { ...val, isSelected: !tuitionselected[tuition].isSelected } : { ...val, isSelected: false }));
        setTuitionselected(data);
        setTuitionupdated(checked.name);
    }
    return (
        <div>
            {console.log(role,tuitionupdated)}
            <div className="tuitionsContainer baseContainer">
                <div className="heading mb-5 mt-5">
                    <h1 className="headingText">Tuition Classes</h1>
                </div>
                <div className="buttonSection">
                    <div className="buttonSectionOne">
                        <ul>
                            {tuitionselected.map((val, index) => (
                                <li key={index}><button className={`${val.isSelected ? "btnSelected" : "selectedButton"}`} onClick={() => tuttionClassesSelected(index)}>{val.name}</button></li>
                            ))
                            }
                        </ul>
                    </div>
                    <div className="buttonSectionTwo">
                        <div className="btn-content text-center m-3 mb-5">
                            <div className="ButtonGroup btn-group shadow-lg  bg-white rounded-pill">
                                <button type="button" value="Trending" className={`m-3 Trending ${trending ? "btnSelected" : ''}`} onClick={() => onSelected('Trending')}>Trending</button>
                                <button type="button" value="Nere Me" className={`m-3 Nere Me ${selected ? "btnSelected" : ''}`} onClick={() => onSelected('nearMe')}>Nere Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="joinOurNetwork">
                <div className="joinOurNetworkText">
                    <h1 className="footerText">
                        More Schools
                    </h1>
                    <div className="MoreschoolsHome"></div><a target="_blank" href="https://www.skoolz.in/home/search" className="joinOurNetworkButton">
                        <div>Search&nbsp; <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default TuitionsClassComp

