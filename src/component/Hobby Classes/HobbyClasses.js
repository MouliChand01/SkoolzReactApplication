import React, { useState,memo} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './HobbyClasses.css';

const HobbyClassesComp = () => {
    const buttonList = [
        {
            name: "Dance",
            isSelected: true
        },
        {
            name: "Sports",
            isSelected: false
        },
        {
            name: "Music",
            isSelected: false
        },
        {
            name: "Art & Crafts",
            isSelected: false
        },
        {
            name: "Yoga & Fitness",
            isSelected: false
        },
        {
            name: "Swimming",
            isSelected: false
        },
        {
            name: "Handwriting",
            isSelected: false
        },
        {
            name: "Photography",
            isSelected: false
        },
        {
            name: "Coaching classes",
            isSelected: false
        },
        {
            name: "Traning classes",
            isSelected: false
        },
        {
            name: "Child Developmemt",
            isSelected: false
        }
    ];
    const [hobbyselected, setHobbyselected] = useState(buttonList);
    const [hobbyupdated, setHobbyupdated] = useState('Dance');
    const [trending, setTrending] = useState(true);
    const [selected, setSelected] = useState(false);
    const [role, setRole] = useState("Trending")

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
    const hobbyClassesSelected = (hobby) => {
        const checked = hobbyselected[hobby];
        let data = hobbyselected.map((val) => (val.name === hobbyselected[hobby].name ? { ...val, isSelected: !hobbyselected[hobby].isSelected } : { ...val, isSelected: false }));
        setHobbyselected(data)
        setHobbyupdated(checked.name)
    }
    return (
        <div>
            <div className="hobbyClassContainer baseContainer">
                <div className="heading mb-5 mt-5">
                    <h1 className="headingText">Hobby Classes</h1>
                </div>
                <div className="buttonSection">
                    <div className="buttonSectionOne">
                        <ul>
                            {hobbyselected.map((val, index) => (
                                <li key={index}><button className={`${val.isSelected ? "btnSelected" : "selectedButton"}`} onClick={() => hobbyClassesSelected(index)}>{val.name}</button></li>
                            ))}
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
                    <h1>
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
export default memo(HobbyClassesComp);