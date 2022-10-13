import React, { useState ,memo} from "react";
import "./SideListFilter.css";
import sidebarjson from '../../../Assets/sideBar.json';
import axios from "axios";

const ListFilter = (props) => {
    const [data, setData] = useState(sidebarjson);
    const [count,setCount]= useState()                                       /* what we selecting at last count for search Api*/
    const [controlArrayObjectNames,setControlArrayObjectNames]=useState([])  /* seleted filelds storered names*/ 
    const [schoolFilter, setSchoolFilter] = useState([])
    const [classificationFilter, setClassificationFilter] = useState([])
    const [boardFilter, setBoardFilter] = useState([])
    const [preSchoolTypeFilter, setPreSchoolTypeFilter] = useState([])
    const [facilitiesFilter, setFacilitiesFilter] = useState([])
    const { boards, classifications, preSchoolTypes, facilities, schoolTypes } = data[0];

    const onSelected = (type, id,displayname) => {
        if (type === 'schoolTypes') {
            if (schoolFilter.indexOf(id) === -1) {
                schoolFilter.push(id);
                controlArrayObjectNames.push(displayname)
                let checkedData = [...schoolFilter]
                setSchoolFilter(checkedData)
                setCount(1) 
            }
            else if (schoolFilter.includes(id) && controlArrayObjectNames.includes(displayname) ) {
                let index = schoolFilter.indexOf(id);
                schoolFilter.splice(index, 1);
                let indexofschooltype = controlArrayObjectNames.indexOf(displayname);
                controlArrayObjectNames.splice(indexofschooltype,1)
                let checkedData1 = [...schoolFilter]
                setSchoolFilter(checkedData1)
                setCount(1) 
            }
        };
        if (type === 'classifications') {
            if(classificationFilter.indexOf(id) === -1){
                classificationFilter.push(id)  
                controlArrayObjectNames.push(displayname)
                let checkedData=[...classificationFilter]
                setClassificationFilter(checkedData) 
                setCount(2)         
            }
            else if (classificationFilter.includes(id)  && controlArrayObjectNames.includes(displayname)){
                let index =classificationFilter.indexOf(id)
                classificationFilter.splice(index,1);
                let indexofschooltype = controlArrayObjectNames.indexOf(displayname);
                controlArrayObjectNames.splice(indexofschooltype,1)
                let checkedData1=[... classificationFilter]
                setClassificationFilter(checkedData1)
                setCount(2) 
            }
        }
        if (type === 'boards') {
            if(boardFilter.indexOf(id) === -1){
                boardFilter.push(id)  
                controlArrayObjectNames.push(displayname)
                let checkedData=[...boardFilter]
                setBoardFilter(checkedData) 
                setCount(3)          
            }
            else if (boardFilter.includes(id)  && controlArrayObjectNames.includes(displayname)){
                let index =boardFilter.indexOf(id)
                boardFilter.splice(index,1);
                let indexofschooltype = controlArrayObjectNames.indexOf(displayname);
                controlArrayObjectNames.splice(indexofschooltype,1)
                let checkedData1=[... boardFilter]
                setBoardFilter(checkedData1)
                setCount(3) 
            }
        }
        if (type === 'preschooltype') {
            if(preSchoolTypeFilter.indexOf(id) === -1){
                preSchoolTypeFilter.push(id)  
                controlArrayObjectNames.push(displayname)
                let checkedData=[...preSchoolTypeFilter]
                setPreSchoolTypeFilter(checkedData) 
                setCount(4)          
            }
            else if (preSchoolTypeFilter.includes(id)  && controlArrayObjectNames.includes(displayname)){
                let index =preSchoolTypeFilter.indexOf(id)
                preSchoolTypeFilter.splice(index,1);
                let indexofschooltype = controlArrayObjectNames.indexOf(displayname);
                controlArrayObjectNames.splice(indexofschooltype,1)
                let checkedData1=[... preSchoolTypeFilter]
                setPreSchoolTypeFilter(checkedData1)
                setCount(4) 
            }
        }
        if (type === 'facility') {
            if(facilitiesFilter.indexOf(id) === -1){
                facilitiesFilter.push(id)  
                controlArrayObjectNames.push(displayname)
                let checkedData=[...facilitiesFilter]
                setFacilitiesFilter(checkedData) 
                setCount(5)          
            }
            else if (facilitiesFilter.includes(id)  && controlArrayObjectNames.includes(displayname)){
                let index =facilitiesFilter.indexOf(id)
                facilitiesFilter.splice(index,1);
                let indexofschooltype = controlArrayObjectNames.indexOf(displayname);
                controlArrayObjectNames.splice(indexofschooltype,1)
                let checkedData1=[... facilitiesFilter]
                setFacilitiesFilter(checkedData1)
                setCount(5) 
            }
        };
        // axios.post(`${process.env.dev}/endpoint`, {
        //     "schoolType": "",
        //     "schoolClassification": "",
        //     "schoolBoard": "",
        //     "schoolFee": "",
        //     "preSchoolType": "",
        //     "hasAcClasses": false,
        //     "hasTransport": false,
        //     "hasDayCare": false,
        //     "hasCCTvSurveillance": false,
        //     "fromFilter": 1,
        //     "latitude": props.sendingCorodinates.lat,
        //     "longitude": props.sendingCorodinates.lng
        // }).then(res => {
        //    setSchoolData(res)
        // });
        props.geetingSelecctedData(controlArrayObjectNames);
    }
    return (
        <div>
            {console.log(schoolFilter,classificationFilter, props.sendingCorodinates,"mmmm")}
            <div className="searchFilters">
                Search Filters <a href="#" className="clearFilters"> Clear All </a>
            </div>
            <div>
                <div className="sidebar-card mt-3">
                    <div className="filterTitle">School Type</div>
                    {
                        schoolTypes && schoolTypes.map(ele =>
                            <button key={ele.id} style={{ "padding": "3px 12px" }} onClick={() => onSelected("schoolTypes", ele.id, ele.displayName)}>{ele.displayName}</button>)
                    }
                    <hr />
                    <div className="filterTitle">Classification</div>
                    {
                        classifications && classifications.map(ele =>
                            <button key={ele.id} style={{ "padding": "3px 12px" }} onClick={() => onSelected("classifications",ele.id,ele.displayName)}>{ele.displayName}</button>)
                    }
                    <hr />
                    <div className="filterTitle">Board</div>
                    {
                        boards && boards.map(ele =>
                            <button key={ele.id} style={{ "padding": "3px 12px" }} onClick={() => onSelected("boards",ele.id,ele.displayName)}>{ele.displayName}</button>)
                    }
                    <hr />
                    <div className="filterTitle">PreSchool Type</div>
                    {
                        preSchoolTypes && preSchoolTypes.map(ele =>
                            <button key={ele.id} style={{ "padding": "3px 12px" }} onClick={() => onSelected("preschooltype",ele.id,ele.displayName)}>{ele.displayName}</button>)
                    }
                    <hr />
                    <div className="filterTitle">Facilities</div>
                    {
                        facilities && facilities.map(ele =>
                            <button key={ele.id} style={{ "padding": "3px 12px" }} onClick={() => onSelected("facility",ele.id,ele.displayName)}>{ele.displayName}</button>)
                    }


                </div>
                <div className="card mt-3">
                    <div className="adds d-flex  justify-content-center  align-items-center">
                        <p>Ad's will be plced here</p>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="adds d-flex  justify-content-center  align-items-center">
                        <p>Ad's will be plced here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ListFilter);