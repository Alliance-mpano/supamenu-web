import React from "react";
// import "./create.styles.css"

const AddItem = () => {
    const styles = {
        view: {
            background: "#FFFFFF",
        border: "1px solid #DFE0EB",
        borderRadius:" 8px",
        width: "40%",
        display: "inline-block",
        padding: "25px",
        margin: "1% auto",
        // backgroundColor: "black"
        
        },
        flexCont: {display: "flex", justifyContent: "space-between"},
        new: { fontSize: "13px", color:"#FFF", backgroundColor: " #F08F5F", borderRadius: "8px",padding: "7px 15px"}
    }
    return(
        <div className="view" style={styles.view}>
            <div style={styles.flexCont}>
                <p style={{fontWeight: "700", fontSize: "1.4em"}}>Add Item</p>
            </div>
            <div className="item" style={styles.flexCont}>
                <p>Create New Menu Item</p>
                <p style={{backgroundColor: "#F0F1F7",borderRadius: "8px", padding: "0 8px", fontWeight: "bold"}}>+</p>
            </div>
            <div className="item" style={styles.flexCont}>
                <p>Dessert</p>
                
            </div>
            <div className="item" style={styles.flexCont}>
                <p>Main</p>
                
            </div>
            <div className="item" style={styles.flexCont}>
                <p>Drink</p>
                <span>DEFAULT</span>
            </div>
            <div className="item" style={styles.flexCont}>
                <p>Appetizer</p>
                
            </div>
            <div className="item" style={styles.flexCont}>
                <p>Starter</p>
                
            </div>
        </div>
    )
}

export default AddItem;