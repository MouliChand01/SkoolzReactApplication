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
                    <div className="col-3">
                        <ListFilter />
                    </div>
                    <div className="col-9">
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