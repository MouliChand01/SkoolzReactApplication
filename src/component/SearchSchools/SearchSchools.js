import React, { useState, useEffect } from "react";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import ModelListFilter from "./ModelListFilter/ModelListFilter";
import CardFilter from "./CardComponent/CardComponent";
import ListFilter from "./SideListFilter/SideListFilter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faFilter, faAngleDown, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import "./SearchSchools.css"
import { Link } from "react-router-dom";

const SearchSchools = (props) => {
    const [display, setDisplay] = useState(false);
    const [footerdisplay, setFooterDisplay] = useState(false);
    const [gettingCorod, setGettingCorod] = useState();
    const [deletedItemIndex, setDeletedItemIndex] = useState();
    const [schoolTypeArray, setSchoolTypeArray] = useState([])
    const [classificationTypeArray, setClassificationTypeArray] = useState([])
    const [boardTypeArray, setBoardTypeArray] = useState([])
    const [preSchoolTypeArray,setPreSchoolTypeArray]=useState([])
    const [facilitiesTypeArray, setFacilitiesTypeArray] = useState([])
    const [updatedObjects, setUpdatedObjects] = useState([]);

    const [gettingschool,setGettingSchool]=useState([])


    const Toggle = () => {
        return setDisplay(!display)
    }
    const Closemodel = () => {
        setDisplay(false)

    }
    useEffect(() => {
        if (updatedObjects.length > 0) setFooterDisplay(true)
    }, [updatedObjects])

    const ToogleFooterDispaly = () => {
        setFooterDisplay(!footerdisplay)
    }
    const getingObjects = (data) => {
        setUpdatedObjects(data)
    }

    const deletingSchool = (id, index) => {
        let checked = updatedObjects.filter((ele) => ele.schoolId !== id);
        setUpdatedObjects(checked)
        setDeletedItemIndex(index)
    }
    const geetingSelecctedData = (arr1, arr2, arr3, arr4,arr5) => {
        let name = [...arr1]
        setSchoolTypeArray(name)
        let name1 = [...arr2]
        setClassificationTypeArray(name1)
        let name2 = [...arr3]
        setBoardTypeArray(name2)
        let name3 = [...arr4]
        setFacilitiesTypeArray(name3)
        let name4 = [...arr5]
        setPreSchoolTypeArray(name4)
        
    }

    const gettingCorodinates = (data) => {
        setGettingCorod(data);
    }

    const sendingAllArrays = (arr1, arr2, arr3, arr4,arr5) => {
        let name = [...arr1]
        setSchoolTypeArray(name)
        setGettingSchool(name)
        let name1 = [...arr2]
        setClassificationTypeArray(name1)
        let name2 = [...arr3]
        setBoardTypeArray(name2)
        let name3 = [...arr4]
        setFacilitiesTypeArray(name3)
        let name4 = [...arr5]
        setPreSchoolTypeArray(name4)
    }

    return (
        <div>
            {}
            <div className="schoolSearch">
                <HeaderComponent gettingCorodinate={gettingCorodinates} />
                <br /><br /><br />
                {display && (
                    <div className={`model ${display && 'show'}`} modelFilter id="modelFilter">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <ModelListFilter Closemodel={Closemodel} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="container grid">
                    <div className="row schools-container">
                        <div className="col-md-12 col-lg-4 col-xl-3 SearchFilter searchFilterPad">
                            <ListFilter geetingSeleectedArrayItems={geetingSelecctedData} sendingCorodinates={gettingCorod} gettingSchool={gettingschool} classificationItems={classificationTypeArray} bordItems={boardTypeArray} facilitiesItems={facilitiesTypeArray} preSchoolTypeItems={preSchoolTypeArray}/>
                        </div>
                        <div className="col-md-12 col-lg-8 col-xl-9 cardFilter" >
                            <CardFilter comapredObject={getingObjects}
                                deletingaitem={deletedItemIndex} schoolTypeItems={schoolTypeArray} classificationItems={classificationTypeArray} bordItems={boardTypeArray} facilitiesItems={facilitiesTypeArray} preSchoolTypeItems={preSchoolTypeArray} sendingAllArrays={sendingAllArrays} />
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
                {/* this is the footer for compair schools */}
                {footerdisplay &&
                    <div className={`footerModel baseContainer ${footerdisplay ? 'active' : ''}`}>
                        <div className="footerTop pt-2 pb-1">
                            Compare School
                        </div>
                        <div className="closeFooter">
                            <FontAwesomeIcon icon={faAngleDown} onClick={ToogleFooterDispaly} />
                        </div>
                        <div className="footerBody">
                            <div className="row">
                                <div className="col-9">
                                    <div className="row">
                                        {updatedObjects.length &&
                                            updatedObjects.map((ele, index) => (
                                                <div key={index} className="col-4">
                                                    <div className="card footerSchoolCard">
                                                        <div className="row">
                                                            <div className="col-2"></div>
                                                            <div className="col-8">{ele.schoolName}</div>
                                                            <div className="col-2 d-flex align-items-center"><FontAwesomeIcon icon={faTrashCan} style={{ "color": "red" }} onClick={() => deletingSchool(ele.schoolId, index)} /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div><Link to="/home/compare" state={{ from: updatedObjects }}><button className="compairBtn">Compare</button></Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                <br />
                <FooterComponent />
            </div>
        </div>
    )
}
export default SearchSchools;