import React from "react";
// import "./create.styles.css"

const NewTable = () => {
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
                <p style={{color: "#000" ,fontWeight: "700", fontSize: "1.4em"}}>Create New Table</p>
                <p>Today</p>
            {/* <div className="item" style={styles.flexCont}>
                <p>NewTable New</p>
                <p style={{backgroundColor: "#F0F1F7",borderRadius: "8px", padding: "0 8px", fontWeight: "bold"}}>+</p>
            </div> */}
            <div className="item" style={styles.flexCont}>
                <p>Drink</p>
            </div>
            <div className="item" style={styles.flexCont}>
                <select style={{width: "100%", border: "none"}} name="location" id="location">
                    <option value="#">Choose Location</option>
                </select>
            </div>
        </div>
    )
}

export default NewTable;