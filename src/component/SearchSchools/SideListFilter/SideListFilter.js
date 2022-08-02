import React from "react";
import "./SideListFilter.css"

const ListFilter = () => {
    let data = [
        {
            id: 0,
            title: "Schools type",
            items: [
                {
                    schooltype: "Per-school"
                },
                {
                    schooltype: "Day-school"
                },
                {
                    schooltype: "Online-school"
                },
                {
                    schooltype: "Board-school"
                },
                {
                    schooltype: "DaycumBoarding-school"
                }]
        },
        {
            id: 1,
            title: "Classification",
            items: [
                {
                    schooltype: "Co-Ed"
                },
                {
                    schooltype: "Boys"
                },
                {
                    schooltype: "Girls"
                }]
        },
        {
            id: 2,
            title: "Boards",
            items: [
                {
                    schooltype: "CBSC"
                },
                {
                    schooltype: "ICSE"
                },
                {
                    schooltype: "State BOARD"
                },
                {
                    schooltype: "IB"
                },
                {
                    schooltype: "IGCSE"
                },
                {
                    schooltype: "Not Applicable"
                }]
        },
        {
            id: 3,
            title: "PreSchools Type",
            items: [
                {
                    schooltype: "PlayWay"
                },
                {
                    schooltype: "Montessori"
                },
                {
                    schooltype: "Reggio-Emilia"
                },
                {
                    schooltype: "Bank Street"
                },
                {
                    schooltype: "STEM-Based"
                },
                {
                    schooltype: "Walrdorf-Stiner"
                },
                {
                    schooltype: "Not Applicable"
                }]
        },
        {
            id: 4,
            title: "Facilities",
            items: [
                {
                    schooltype: "Ac Classes"
                },
                {
                    schooltype: "Transport"
                },
                {
                    schooltype: "Day Care"
                },
                {
                    schooltype: "CCTv Surveillance"
                }
            ]
        }

    ]
    return (
        <div>
            <div className="container searchFilters">
                Search Filters <a href="#" className="clearFilters"> Clear All </a>
            </div>
            <div className="container filterCard">
                <div className="row">
                    <div className="card">
                        {data.map((e, index) => (
                            <div>
                                <div key={index} className="filterTitle">{e.title}</div>
                                {e.items.length ? e.items.map((schooltype, id) => (
                                    <button key={id}>{schooltype.schooltype}</button>
                                )) : null}
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListFilter;