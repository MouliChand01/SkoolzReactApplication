import React from "react";
import "./Homeimage.css";

const Homeimage =()=>{
    return (
        <div>
            <div className="schoolMainHome">
                <div className="heroSection">
                    <div className="heroSectionMiddletext">
                        <div className="heroSectionMiddletext1">FIND SCHOOLS &nbsp;& HOBBY CLASSES <br />FOR YOUR CHILD IN 10 MINUTES.</div>
                       
                    </div>
                    <div className="container webSkoolzRecord">
                        <div className="recordItems">
                        <div className="row">
                            <div className="col-4 itemList">
                                <div className="text-info rightBorder">3000+</div>
                                <div className="itemListTitle rightBorder">Schools</div>

                            </div>
                            <div className="col-4 itemList">
                                <div className="text-primary rightBorder">100+</div>
                                <div className="itemListTitle rightBorder" >Hobby Classes</div>

                            </div>
                            <div className="col-4 itemList">
                                <div className="text-success">Just Launched</div>
                                <div className="itemListTitle" >Tuition Classes</div>

                            </div>
                        </div>
                        </div>
                    </div>
                  </div>
            </div>
        </div>
    )

}
export default Homeimage ;
