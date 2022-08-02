import React from "react";
import FooterComponent from "../Footer/Footer";
import Header from "../Header/Header";
import CardFilter from "./CardComponent/CardComponent";
import ListFilter from "./SideListFilter/SideListFilter";
import "./SearchSchools.css"

const SearchSchools = () => {
    return (
        <div>
            <Header />
            <br /><br /><br />
            <div className="container grid">
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-xl-3 SearchFilter">
                        <ListFilter />
                    </div>
                    <div className="col-md-6 col-lg-8 col-xl-9 cardFilter">
                        <CardFilter />
                    </div>
                </div>
            </div>
            <br />
            <FooterComponent />
        </div>
    )
}
export default SearchSchools;