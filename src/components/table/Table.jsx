import React from "react"

import Order from "../common/Order";
import ShortView from "../common/ShortView";
import NewTable from "./NewTable";
import OneTable from "./OneTable";
// import AddOrder from './AddOrder';
const Table = () => {
    return (
        <div style={{backgroundColor:"#F7F8FC"}}>
            <p style={{fontSize: "1.7em", fontWeight: "bold", marginBottom: "0.5%"}}> Guests</p>
            <div className="orderCont">
                
                <div style={{width:"85%"}}>
                    <div style={{display: "flex", gap: "10%"}}>
                        <div>
                            <p style={{fontSize: "1.4em", fontWeight: "500", lineHeight: "2em"}}>Guests</p>
                            <p style={{color: " #9FA2B4"}}>as of 25 May 2022, 09: 41PM</p>
                        </div>
                        <div>
                            <button className="button">New</button>
                            <button className="button">Delivered</button>
                            <button  className="button">Rejected</button>
                            <button className="button">All</button>
                        </div>
                    </div>
                    <div style={{padding: "0 5px", display: "flex", flexWrap: "wrap", marginTop: "2%"}}>
                        <OneTable></OneTable>
                        <OneTable></OneTable>
                        <OneTable></OneTable>
                        <OneTable></OneTable>
                        <OneTable></OneTable>
                    </div>
                    
                </div>
                <div style={{display:"flex", width:"15%", flexDirection:"column", borderLeft: "1px solid #DFE0EB"}}>
                    <div style={{display:"flex", width:"100%", flexDirection:"column", borderLeft: "1px solid #DFE0EB"}}>
                            <div className="sideInfo">
                                <p>Delivered</p>
                                <b>6</b>
                            </div>
                            <div className="sideInfo">
                                <p>Waiting</p>
                                <b>6</b>
                            </div>
                            <div className="sideInfo">
                                <p>Rejected</p>
                                <b>6</b>
                            </div>
                            <div className="sideInfo">
                                <p>All</p>
                                <b>6</b>
                            </div>
                    </div>
                    {/* <AddOrder/> */}
                </div>
            </div>
            <div style={{display: "flex", marginTop: "1.5%"}}>
                <div style={{display: "flex", flexWrap: "wrap", gap: "1em", width: "60%"}}>
                    <ShortView />
                    <ShortView />
                    
                </div>
                <NewTable/>
                {/* <Create/> */}
            </div>
        </div>
    )
}

export default Table;