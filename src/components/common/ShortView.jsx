import React from "react";
import "./shortView.styles.css"

const ShortView = () => {
    const styles = {
        view: {
            background: "#FFFFFF",
        border: "1px solid #DFE0EB",
        borderRadius:" 8px",
        width: "46%",
        padding: "25px",
        
        },
        flexCont: {display: "flex", justifyContent: "space-between"}
    }
    return(
        <div className="view" style={styles.view}>
            <div style={styles.flexCont}>
                <p style={{fontWeight: "700", fontSize: "1.4em"}}>Drinks</p>
                <span>View details</span>
            </div>
            <p>Sales</p>
            <div className="item" style={styles.flexCont}>
                <p>Primus</p>
                <p>46000</p>
            </div>
            <div className="item" style={styles.flexCont}>
                <p>Whiskey</p>
                <p>12000</p>
            </div>
        </div>
    )
}

export default ShortView;