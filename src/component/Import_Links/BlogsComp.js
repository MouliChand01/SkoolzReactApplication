import React, { useEffect, useRef, useState } from "react";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";
import { LoadBlogs } from '../../Assets/index'
import './BlogsComp.css';

const BlogsComp = () => {
    const cityList = [
        {
            name: "Bangalore",
            isSelected: true
        },
        {
            name: "Chennai",
            isSelected: false
        },
        {
            name: "Delhi",
            isSelected: false
        },
        {
            name: "Hyderabad",
            isSelected: false
        },
        {
            name: "Mumbai",
            isSelected: false
        }]
    const schoolTypeList = [
        {
            name: "Pre-schools",
            isSelected: true
        },
        {
            name: "Boards",
            isSelected: false
        },
        {
            name: "Admissionss",
            isSelected: false
        },
        {
            name: "Education",
            isSelected: false
        },
        {
            name: "Parenting",
            isSelected: false
        },
        {
            name: "Type School",
            isSelected: false
        },
        {
            name: "NEP",
            isSelected: false
        },
        {
            name: "Others",
            isSelected: false
        }]
    const [trending, setTrending] = useState(true);
    const [selected, setSelected] = useState(false);
    const [citySelected, setCitySelected] = useState(cityList);
    const [schoolSelected, setSchoolSelected] = useState(schoolTypeList);
    const [loadBlogs, setLoadBlogs] = useState(LoadBlogs);
    const [sortedBlogs, setSortedBlogs] = useState([]);
    const [cityUpdate,setCityUpdate]=useState("Bangalore");
    const [schoolUpdate,setSchoolUpdate]=useState("Pre-schools");
    const[ role,setRole]=useState("Trending")
  
    useEffect(()=>{
        var data = []
        loadBlogs.map((item,index)=>{
            if(item.schoolType.includes(schoolUpdate) && item.schoolCity.includes(cityUpdate)){
                    setSortedBlogs(data)
                    data.push(item)
                    setSortedBlogs(data)         
            }
        })
    },[cityUpdate,schoolUpdate])

    const onSelected = (e) => { 
        setTrending(!trending);
        setSelected(!selected);
        setRole(e.target.value);       
    };

    const onCitySelected = (val1) => {
        const checked = citySelected[val1];
        let data = citySelected.map((val) => val.name === citySelected[val1].name ? { ...val, isSelected: !citySelected[val1].isSelected } : { ...val, isSelected: false });
        setCitySelected(data);
        setCityUpdate(checked.name)
    };

    const onSchoolTypeSelected = (val2) => { 
        const checked = schoolSelected[val2];
        let data = schoolSelected.map((val) => val.name === schoolSelected[val2].name ? { ...val, isSelected: !schoolSelected[val2].isSelected } : { ...val, isSelected: false });
        setSchoolSelected(data);
        setSchoolUpdate(checked.name)
      
    }

    return (
        <div>
            <HeaderComponent />
            <div className="BlogsContainer baseContainer">
                <div>
                    <div className="heading">
                        <h1 className="headingText">Blogs</h1>
                    </div>
                    <div className="btngroupLineOne">
                        <ul className="ButtonGroup">
                            {schoolSelected.map((val, index) => (
                                <li key={index}><button type="button" className={`${val.isSelected ? "btnSelected" : "selectedButton"}`} value={val.name} onClick={() => onSchoolTypeSelected(index)}>{val.name}</button></li>
                            ))}
                        </ul>
                    </div>
                    <div className="btngroupLineTwo">
                        <ul className="ButtonGroup">
                            {citySelected.map((val, index) => (
                                <li key={index}><button type="button" className={`${val.isSelected ? "btnSelected" : "selectedButton"}`} value={val.name} onClick={() => onCitySelected(index)}>{val.name}</button></li>
                            ))}
                        </ul>
                    </div>
                    <div className="btn-content text-center m-3 mb-5">
                        <div className="ButtonGroup btn-group shadow-lg  bg-white rounded-pill">
                            <button type="button" value="Trending" className={`m-3 Trending ${trending ? "btnSelected" : ''}`} onClick={(event)=>onSelected(event)}>Trending</button>
                            <button type="button" value="Latest" className={`m-3 Latest ${selected ? "btnSelected" : ''}`} onClick={(event)=>onSelected(event)}>Latest</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9 col-md-12 col-sm-12">
                        {sortedBlogs.map((value, index) => (
                            <div className="card" key={index}>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-12 col-sm-12">
                                        <h4 className="text-justfiy">{value.blogName}</h4> 
                                    </div>
                                    <div className="col-lg-6 col-sm-12 col-sm-12">
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="QuicklinksListOne">
                            <h5 className="highlightText"> Quick links</h5>
                            <ul className="QuicklinksButtonGroup">
                                <li><button type="button" className="QuicklinksButton m-1">Home</button></li>
                                <li><button type="button" className="QuicklinksButton m-1">School Search</button></li>
                                <li><button type="button" className="QuicklinksButton m-1">Events/Webinar</button></li>
                                <li><button type="button" className="QuicklinksButton m-1">Blogs</button></li>
                                <li><button type="button" className="QuicklinksButton m-1">Awards & Recongnition</button></li>
                                <li><button type="button" className="QuicklinksButton m-1">Contact Us</button></li>
                                <li><button type="button" className="QuicklinksButton m-1">About Skoolz</button></li>
                            </ul>
                        </div>
                        <div className="QuicklinksListTwo">
                            <h5 className="highlightText">Quick schools<br /> search</h5>
                            <ul className="QuicklinksButtonGroup">
                                <li><button type="button" className="QuicklinksButton m-1">CBSE Schools in Bengaluru</button></li>
                                <li><button type="button" className="QuicklinksButton m-1">ICSE Schools in Bengaluru</button></li>
                                <li><button type="button" className="QuicklinksButton m-1">IGCES Schools in Bengaluru</button></li>
                                <li><button type="button" className="QuicklinksButton m-1">Pre-School in Bengaluru</button></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <FooterComponent />
        </div>
    )
}
export default BlogsComp;