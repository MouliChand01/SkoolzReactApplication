import React, { useEffect, useState } from "react";
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
                let schoolTypeData = [...schoolFilter]
                setSchoolFilter(schoolTypeData)
            }
        };
        if (type === 'classifications') {
            if (classificationFilter.indexOf(id) === -1) {
                classificationFilter.push(id)
                let checkedData = [...classificationFilter]
                setSchoolFilter(checkedData)
            }
            else if (classificationFilter.includes(id)) {
                let index = classificationFilter.indexOf(id);
                classificationFilter.splice(index, 1);
                let schoolTypeData = [...classificationFilter]
                setSchoolFilter(schoolTypeData)
            }
        }
    }
    return (

        <div>
            {console.log(schoolFilter,classificationFilter)}
            {console.log(data)}
            <div className="searchFilters">
                Search Filters <a href="#" className="clearFilters"> Clear All </a>
            </div>
            <div>
                <div className="sidebar-card mt-3">
                    <div className="filterTitle">School Type</div>
                    {
                        schoolTypes && schoolTypes.map(ele =>
                            <button style={{ "padding": "3px 12px" }} onClick={() => onSelected("schoolTypes", ele.id)}>{ele.displayName}</button>)
                    }
                    <hr />
                    <div className="filterTitle">Classification</div>
                    {
                        classifications && classifications.map(ele =>
                            <button style={{ "padding": "3px 12px" }} onClick={() => onSelected("classifications",ele.name)}>{ele.displayName}</button>)
                    }
                    <hr />
                    <div className="filterTitle">Board</div>
                    {
                        boards && boards.map(ele =>
                            <button style={{ "padding": "3px 12px" }} onClick={() => onSelected(ele.name)}>{ele.displayName}</button>)
                    }
                    <hr />
                    <div className="filterTitle">PreSchool Type</div>
                    {
                        preSchoolTypes && preSchoolTypes.map(ele =>
                            <button style={{ "padding": "3px 12px" }} onClick={() => onSelected(ele.name)}>{ele.displayName}</button>)
                    }
                    <hr />
                    <div className="filterTitle">Facilities</div>
                    {
                        facilities && facilities.map(ele =>
                            <button style={{ "padding": "3px 12px" }} onClick={() => onSelected(ele.name)}>{ele.displayName}</button>)
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

export default ListFilter;