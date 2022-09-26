import React, { useEffect, useState ,memo} from "react";
import "./SideListFilter.css"
import sidebarjson from '../../../Assets/sideBar.json'

const ListFilter = () => {

    const [data, setData] = useState(sidebarjson);
    const [schoolFilter, setSchoolFilter] = useState([])
    const [classificationFilter, setClassificationFilter] = useState([])
    const [boardFilter, setBoardFilter] = useState([])
    const [preSchoolTypeFilter, setPreSchoolTypeFilter] = useState([])
    const [facilitiesFilter, setFacilitiesFilter] = useState([])
    const { boards, classifications, preSchoolTypes, facilities, schoolTypes } = data[0];

    const onSelected = (type, id) => {
        if (type === 'schoolTypes') {
            if (schoolFilter.indexOf(id) === -1) {
                schoolFilter.push(id)
                let checkedData = [...schoolFilter]
                setSchoolFilter(checkedData)
            }
            else if (schoolFilter.includes(id)) {
                let index = schoolFilter.indexOf(id);
                schoolFilter.splice(index, 1);
                let checkedData1 = [...schoolFilter]
                setSchoolFilter(checkedData1)
            }
        };
        if (type === 'classifications') {
            if(classificationFilter.indexOf(id) === -1){
                classificationFilter.push(id)  
                let checkedData=[...classificationFilter]
                setClassificationFilter(checkedData)          
            }
            else if (classificationFilter.includes(id)){
                let index =classificationFilter.indexOf(id)
                classificationFilter.splice(index,1);
                let checkedData1=[... classificationFilter]
                setClassificationFilter(checkedData1)
            }
        }
        if (type === 'boards') {
            if(boardFilter.indexOf(id) === -1){
                boardFilter.push(id)  
                let checkedData=[...boardFilter]
                setBoardFilter(checkedData)          
            }
            else if (boardFilter.includes(id)){
                let index =boardFilter.indexOf(id)
                boardFilter.splice(index,1);
                let checkedData1=[... boardFilter]
                setBoardFilter(checkedData1)
            }
        }
        if (type === 'preschooltype') {
            if(preSchoolTypeFilter.indexOf(id) === -1){
                preSchoolTypeFilter.push(id)  
                let checkedData=[...preSchoolTypeFilter]
                setPreSchoolTypeFilter(checkedData)          
            }
            else if (preSchoolTypeFilter.includes(id)){
                let index =preSchoolTypeFilter.indexOf(id)
                preSchoolTypeFilter.splice(index,1);
                let checkedData1=[... preSchoolTypeFilter]
                setPreSchoolTypeFilter(checkedData1)
            }
        }
        if (type === 'facility') {
            if(facilitiesFilter.indexOf(id) === -1){
                facilitiesFilter.push(id)  
                let checkedData=[...facilitiesFilter]
                setFacilitiesFilter(checkedData)          
            }
            else if (facilitiesFilter.includes(id)){
                let index =facilitiesFilter.indexOf(id)
                facilitiesFilter.splice(index,1);
                let checkedData1=[... facilitiesFilter]
                setFacilitiesFilter(checkedData1)
            }
        }
    }
    return (

        <div>
            {/* {console.log(schoolFilter,classificationFilter,boardFilter,preSchoolTypeFilter,facilitiesFilter)} */}
            <div className="searchFilters">
                Search Filters <a href="#" className="clearFilters"> Clear All </a>
            </div>
            <div>
                <div className="sidebar-card mt-3">
                    <div className="filterTitle">School Type</div>
                    {
                        schoolTypes && schoolTypes.map(ele =>
                            <button key={ele.id} style={{ "padding": "3px 12px" }} onClick={() => onSelected("schoolTypes", ele.id)}>{ele.displayName}</button>)
                    }
                    <hr />
                    <div className="filterTitle">Classification</div>
                    {
                        classifications && classifications.map(ele =>
                            <button key={ele.id} style={{ "padding": "3px 12px" }} onClick={() => onSelected("classifications",ele.id)}>{ele.displayName}</button>)
                    }
                    <hr />
                    <div className="filterTitle">Board</div>
                    {
                        boards && boards.map(ele =>
                            <button key={ele.id} style={{ "padding": "3px 12px" }} onClick={() => onSelected("boards",ele.id)}>{ele.displayName}</button>)
                    }
                    <hr />
                    <div className="filterTitle">PreSchool Type</div>
                    {
                        preSchoolTypes && preSchoolTypes.map(ele =>
                            <button key={ele.id} style={{ "padding": "3px 12px" }} onClick={() => onSelected("preschooltype",ele.id)}>{ele.displayName}</button>)
                    }
                    <hr />
                    <div className="filterTitle">Facilities</div>
                    {
                        facilities && facilities.map(ele =>
                            <button key={ele.id} style={{ "padding": "3px 12px" }} onClick={() => onSelected("facility",ele.id)}>{ele.displayName}</button>)
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