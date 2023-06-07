import React from "react";
import MenuItem from "./MenuItem";
import AddItem from "./AddItem";

const Menu = () => {
    return(
        <div style={{backgroundColor:"#F7F8FC"}}>
            <p style={{fontSize: "1.7em", fontWeight: "bold", marginBottom: "0.5%"}}> Menu</p>
            <div className="orderCont">
                
                <div style={{width:"85%"}}>
                    <div style={{display: "flex", gap: "10%"}}>
                        <div>
                            <p style={{fontSize: "1.4em", fontWeight: "500", lineHeight: "2em"}}>Menus</p>
                            <p style={{color: " #9FA2B4"}}>as of 25 May 2022, 09: 41PM</p>
                        </div>
                        <div>
                            <button className="button">Drink</button>
                            <button className="button">Starter</button>
                            <button  className="button">Appetizer</button>
                            <button className="button">Dessert</button>
                            <button className="button">Main</button>
                        </div>
                    </div>
                    <div style={{display: "flex"}}>
                    <div style={{padding: "0 5px", display: "flex", width: "50%", flexDirection: "column", marginTop: "2%"}}>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                    </div>
                    <AddItem/>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Menu;