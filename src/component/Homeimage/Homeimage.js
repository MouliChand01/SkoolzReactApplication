import React from "react";
import "./Homeimage.css";

const Homeimage =()=>{
    return (
        <div>
            <div className="schoolMainHome">
                <div className="heroSection">
                    <div className="heroSectionMiddletext">
                        <div className="heroSectionMiddletext1">FIND SCHOOLS &nbsp;& HOBBY CLASSES <br />FOR YOUR CHILD IN 10 MINUTES.</div>
                        {/* <div className="heroSectionMiddletext2">SCHOOL & HOBBY CLASSES</div> */}
                    </div>
                    <div className="container webSkoolzRecord">
                        <div className="row recordItems">
                            <div className="col-4 itemList">
                                <div className="text-info rightBorder">3000+</div>
                                <div className="itemListTitle rightBorder" style={{"word-break":"break-all"}}>Schools</div>

                            </div>
                            <div className="col-4 itemList">
                                <div className="text-primary rightBorder">100+</div>
                                <div className="itemListTitle rightBorder" style={{"word-break":"break-all"}}>Hobby Classes</div>

                            </div>
                            <div className="col-4 itemList">
                                {/* <div className="text-success">Coming Soon</div> */}
                                <div className="text-success">Just Launched</div>
                                <div className="itemListTitle" style={{"word-break":"break-all"}}>Tuition Classes</div>

                            </div>
                        </div>
                    </div>
                    {/* <div className="container mobileSkoolzRecord">
                        <div className="row recordItems">
                            <div className="col-4 itemList">
                                <div className="text-info rightBorder" style={{"word-break":"break-all"}}>3000+</div>
                                <div className="itemListTitle rightBorder">Schools</div>
                            </div>
                            <div className="col-4 itemList">
                                <div className="text-primary rightBorder" style={{"word-break":"break-all"}}>100+</div>
                                <div className="itemListTitle rightBorder" style={{"word-break":"break-all"}}>Hobby Classes</div>
                            </div>
                            <div className="col-4 itemList">
                                <div className="text-success" style={{"word-break":"break-all"}}>Coming Soon</div>
                                <div className="text-successText" style={{"word-break":"break-all"}}>Just Launched</div>
                                <div className="itemListTitle" style={{"word-break":"break-all"}}>Tuition Classes</div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )

}
export default Homeimage ;
