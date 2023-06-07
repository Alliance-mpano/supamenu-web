import React from "react";
import Order from './../common/Order';
import "./overview.styles.css"
import ShortView from "../common/ShortView";
import Create from "./Create";
const Overview = () => {
    const styles = {
        quickPar: {color: "#9FA2B4", fontSize: "18px", fontWeight: "bold"},
        quickStat: {fontSize: "2em", fontWeight: "bold", marginTop: "2%"}
    }
    return(
        <div style={{backgroundColor:"#F7F8FC"}}>
            <p style={{fontSize: "1.7em", fontWeight: "bold", marginBottom: "0.5%"}}> Overview</p>
            <div className="quickInfo"> 
                <div>
                    <p style={styles.quickPar}>Guests</p>
                    <p style={styles.quickStat}>20</p>
                </div>
                <div>
                    <p style={styles.quickPar}>Revenues (FRW)</p>
                    <p style={styles.quickStat}>38234000</p>
                </div>
                <div>
                    <p style={styles.quickPar}>Orders</p>
                    <p style={styles.quickStat}>60</p>
                </div>
            </div>
            <div className="orderCont">
                <div style={{width:"20%"}}>
                    <p style={{fontSize: "1.4em", fontWeight: "500", lineHeight: "2em"}}>Orders</p>
                    <p style={{color: " #9FA2B4"}}>as of 25 May 2022, 09: 41PM</p>
                </div>
                <div style={{width:"60%"}}>
                    <div>
                        <button className="button">Active</button>
                        <button className="button">Paid</button>
                        <button  className="button">Pending</button>
                        <button className="button">All</button>
                    </div>
                    <div style={{marginTop: "3%"}}>
                        <Order></Order>
                        <Order></Order>
                        <Order></Order>
                        <Order></Order>
                        <Order></Order>
                    </div>
                    
                </div>
                <div style={{display:"flex", width:"20%", flexDirection:"column", borderLeft: "1px solid #DFE0EB"}}>
                        <div className="sideInfo">
                            <p>Pending orders</p>
                            <b>6</b>
                        </div>
                        <div className="sideInfo">
                            <p>Occupied tables</p>
                            <b>6</b>
                        </div>
                        <div className="sideInfo">
                            <p>Order/hour</p>
                            <b>6</b>
                        </div>
                        <div className="sideInfo">
                            <p>Seats</p>
                            <b>6</b>
                        </div>
                    </div>
            </div>
            <div style={{display: "flex", marginTop: "1.5%"}}>
                <div style={{display: "flex", flexWrap: "wrap", gap: "1em", width: "60%"}}>
                    <ShortView />
                    <ShortView />
                    <ShortView />
                    <ShortView />
                </div>
                <Create/>
            </div>
        </div>
    )
}

export default Overview