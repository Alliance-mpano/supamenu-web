import React from "react";
import "./create.styles.css"

const Create = () => {
    const styles = {
        view: {
            background: "#FFFFFF",
        border: "1px solid #DFE0EB",
        borderRadius:" 8px",
        width: "25%",
        padding: "25px",
        marginTop: "1%"
        
        },
        flexCont: {display: "flex", justifyContent: "space-between"},
        new: { fontSize: "13px", color:"#FFF", backgroundColor: " #F08F5F", borderRadius: "8px",padding: "7px 15px"}
    }
    return(
        <div className="view" style={styles.view}>
            <div style={styles.flexCont}>
                <p style={{fontWeight: "700", fontSize: "1.4em"}}>Create</p>
                <span>View all</span>
            </div>
            <p>Today</p>
            <div className="item" style={styles.flexCont}>
                <p>Create New</p>
                <p style={{backgroundColor: "#F0F1F7",borderRadius: "8px", padding: "0 8px", fontWeight: "bold"}}>+</p>
            </div>
            <div className="item" style={styles.flexCont}>
                <p>Drink</p>
                <span style={styles.new}>NEW</span>
            </div>
            <div className="item" style={styles.flexCont}>
                <p>Main</p>
                <span style={styles.new}>NEW</span>
            </div>
            <div className="item" style={styles.flexCont}>
                <p>Dessert</p>
                <span>DEFAULT</span>
            </div>
        </div>
    )
}

export default Create;