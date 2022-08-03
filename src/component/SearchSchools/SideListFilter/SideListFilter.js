import React from "react";
import "./SideListFilter.css"

const ListFilter = () => {
    // let wrap = document.getElementById('#wrap')
    // wrap.addEventListener("scroll",(event)=>{
    //     if(wrap.scrollTop > 500){
    //         wrap.classList.add("fix-sidebar")
    //         console.log(wrap.scrollTop)
    //     }
    //     else{
    //         wrap.classList.remove("fix-sidebar")
    //     }
    // })
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
        },{
            id: 4,
            title: "Fees(Annual)",
            items: [
                {
                    schooltype: ">₹20,000"
                },
                {
                    schooltype: ">₹20,000 - >₹30,000"
                },
                {
                    schooltype: ">₹30,000 - >₹50,000"
                },
                {
                    schooltype: ">₹50,000 - >₹80,000"
                },
                {
                    schooltype: "₹80,000 - ₹1,20,000"
                },
                {
                    schooltype: "₹1,20,000 - ₹1,70,000"
                },
                {
                    schooltype: "₹1,70,000 - ₹2,30,000"
                },
                {
                    schooltype: "₹2,30,000 - ₹3,00,000"
                },
                {
                    schooltype: "₹3 Lakh+"
                }
            ]
        },
       

    ]
    return (
        <div>
            <div className="searchFilters">
                Search Filters <a href="#" className="clearFilters"> Clear All </a>
            </div>
            <div className="filterCard">
                <div className="">
                    <div className="sidebar-card">
                        {data.map((e, index) => (
                            <div>
                                <div key={index} className="filterTitle">{e.title}</div>
                                {e.items.length ? e.items.map((schooltype, id) => (
                                    <button key={id} style={{"padding":"0px 10px"}}>{schooltype.schooltype}</button>
                                )) : null}
                                <hr />
                            </div>
                        ))}
                    </div>
                    <br/><br/>
                    <div className="card">
                      <div className="adds">
                              <p>Add's will be plced here</p> 
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListFilter;