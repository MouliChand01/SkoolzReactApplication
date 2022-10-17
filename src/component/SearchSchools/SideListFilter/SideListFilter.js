import React, { useState ,memo, useEffect} from "react";
import "./SideListFilter.css";
import sidebarjson from '../../../Assets/sideBar.json';
import axios from "axios";

const ListFilter = (props) => {
    // const [data, setData] = useState();
    const [data, setData] = useState(sidebarjson);  
    const [count,setCount]= useState()                                         /* what we selecting at last count for search Api*/ 
    const [schoolFilter, setSchoolFilter] = useState([])
    const [classificationFilter, setClassificationFilter] = useState([])
    const [boardFilter, setBoardFilter] = useState([])
    const [preSchoolTypeFilter, setPreSchoolTypeFilter] = useState([])
    const [facilitiesFilter, setFacilitiesFilter] = useState([])
    const { boards, classifications, preSchoolTypes, facilities, schoolTypes } = data[0];

    const [schoolTypeArray,setSchoolTypeArray]=useState([])
    const [classificationTypeArray,setClassificationTypeArray]=useState([])
    const [boardTypeArray,setBoardTypeArray]=useState([])
    const [preSchoolTypeArray,setPreSchoolTypeArray]=useState([])
    const [facilitiesTypeArray,setFacilitiesTypeArray]=useState([])

    const [getingSchooType,setgetingSchooType]=useState([])

    const onSelected = (type,id,displayname) => {
        if (type === 'schoolTypes') {
            if (schoolFilter.indexOf(parseInt(id)) == -1) {
                schoolFilter.push(parseInt(id));
                schoolTypeArray.push(displayname)
                let checkedData = [...schoolFilter]
                setSchoolFilter(checkedData)
                setCount(1) 
            }
            else if (schoolFilter.includes(parseInt(id)) && schoolTypeArray.includes(displayname) ) {
                let index = schoolFilter.indexOf(parseInt(id));
                schoolFilter.splice(index, 1);
                let indexofschooltype = schoolTypeArray.indexOf(displayname);
                schoolTypeArray.splice(indexofschooltype,1)
                let checkedData1 = [...schoolFilter]
                setSchoolFilter(checkedData1)
                setCount(1) 
            }
        };
        if (type === 'classifications') {
            if(classificationFilter.indexOf(parseInt(id)) === -1){
                classificationFilter.push(parseInt(id))  
                classificationTypeArray.push(displayname)
                let checkedData=[...classificationFilter]
                setClassificationFilter(checkedData) 
                setCount(2)         
            }
            else if (classificationFilter.includes(parseInt(id))  && classificationTypeArray.includes(displayname)){
                let index =classificationFilter.indexOf(parseInt(id))
                classificationFilter.splice(index,1);
                let indexofschooltype = classificationTypeArray.indexOf(displayname);
                classificationTypeArray.splice(indexofschooltype,1)
                let checkedData1=[... classificationFilter]
                setClassificationFilter(checkedData1)
                setCount(2) 
            }
        }
        if (type === 'boards') {
            if(boardFilter.indexOf(parseInt(id)) === -1){
                boardFilter.push(parseInt(id))  
                boardTypeArray.push(displayname)
                let checkedData=[...boardFilter]
                setBoardFilter(checkedData) 
                setCount(3)          
            }
            else if (boardFilter.includes(parseInt(id))  && boardTypeArray.includes(displayname)){
                let index =boardFilter.indexOf(parseInt(id))
                boardFilter.splice(index,1);
                let indexofschooltype = boardTypeArray.indexOf(displayname);
                boardTypeArray.splice(indexofschooltype,1)
                let checkedData1=[... boardFilter]
                setBoardFilter(checkedData1)
                setCount(3) 
            }
        }
        if (type === 'preschooltype') {
            if(preSchoolTypeFilter.indexOf(parseInt(id)) === -1){
                preSchoolTypeFilter.push(parseInt(id))  
                preSchoolTypeArray.push(displayname)
                let checkedData=[...preSchoolTypeFilter]
                setPreSchoolTypeFilter(checkedData) 
                setCount(4)          
            }
            else if (preSchoolTypeFilter.includes(parseInt(id))  && preSchoolTypeArray.includes(displayname)){
                let index =preSchoolTypeFilter.indexOf(parseInt(id))
                preSchoolTypeFilter.splice(index,1);
                let indexofschooltype = preSchoolTypeArray.indexOf(displayname);
                preSchoolTypeArray.splice(indexofschooltype,1)
                let checkedData1=[... preSchoolTypeFilter]
                setPreSchoolTypeFilter(checkedData1)
                setCount(4) 
            }
        }
        if (type === 'facility') {
            if(facilitiesFilter.indexOf(parseInt(id)) === -1){
                facilitiesFilter.push(parseInt(id))  
                facilitiesTypeArray.push(displayname)
                let checkedData=[...facilitiesFilter]
                setFacilitiesFilter(checkedData) 
                setCount(5)          
            }
            else if (facilitiesFilter.includes(parseInt(id))  && facilitiesTypeArray.includes(displayname)){
                let index =facilitiesFilter.indexOf(parseInt(id))
                facilitiesFilter.splice(index,1);
                let indexofschooltype = facilitiesTypeArray.indexOf(displayname);
                facilitiesTypeArray.splice(indexofschooltype,1)
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
        props.geetingSeleectedArrayItems(schoolTypeArray,classificationTypeArray,boardTypeArray,facilitiesTypeArray,preSchoolTypeArray);
    }
    useEffect(()=>{
        // axios.get(`${process.env.dev}/Metadata`).then(res=>{console.log(res);})
        if(props.gettingSchool){
            setgetingSchooType([])
            let checked =[...props.gettingSchool]
            setSchoolTypeArray(checked)
            schoolTypes.map((val)=>{
                checked.map((val1)=>{  
                    if(val.displayName === val1){
                           if(getingSchooType.indexOf(val.id)){
                               getingSchooType.push(parseInt(val.id))
                           }
                        }
                })
            })
              setSchoolFilter(getingSchooType);
        }
        if(props.classificationItems){
            let checked =[...props.classificationItems]
            setClassificationTypeArray(checked)
        }
        if(props.bordItems){
            let checked =[...props.bordItems]
            setBoardTypeArray(checked)
        }
        if(props.facilitiesItems){
            let checked =[...props.facilitiesItems]
            setFacilitiesTypeArray(checked)
        }
        if(props.preSchoolTypeItems){
            let checked =[...props.preSchoolTypeItems]
            setPreSchoolTypeArray(checked)
        }

    },[props.gettingSchool])


  
   
    return (
        <div>
            {console.log(schoolFilter,"ooooo")}
            {console.log(schoolFilter,"ppppppppp")}
            <div className="searchFilters">
                Search Filters <a href="#" className="clearFilters"> Clear All </a>
            </div>
            <div>
                <div className="sidebar-card mt-3">
                    <div className="filterTitle">School Type</div>
                    {
                        schoolTypes && schoolTypes.map(ele =>
                            <button key={ele.id} style={{ "padding": "3px 12px" }} onClick={(e) => onSelected("schoolTypes", ele.id, ele.displayName)}>{ele.displayName}</button>)
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