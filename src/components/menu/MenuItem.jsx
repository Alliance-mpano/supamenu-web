import React from "react";
import { icons } from "../../constants";

const MenuItem = () => {

    const styles = {
        menuItem: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            background: "#F8F8FB",
            borderRadius: "16px",
            padding: "5px 15px",
            margin: "10px",
            alignItems: "center"
        }
    }
    return (
        <div style={styles.menuItem}>
            <img style={{height: "fit-content"}} src={icons.menuItem} alt="" />
            <div>
                <p style={{color: "#363636", lineHeight: "0.4em",fontWeight: "lighter"}}>Kaffir Lime Vodka, Lemongrass, Ginger, Citrus</p>
                <p><b>Tom Yummy - 12.5</b></p>
                <p style={{lineHeight: "19px", color: "#F08F5F", fontWeight: "700", fontSize: "18px"}}>Frw 5,000</p>
            </div>
            <img style={{width: "initial", height: "fit-content"}} src={icons.edit} alt="" />
        </div>
    )
}

export default MenuItem