import React from "react";
import { icons } from "../constants";

const steps = [
    {
        number: 1,
        image: icons.register,
        descr: "Register your restaurant"
    },
    {
        number: 2,
        image: icons.food,
        descr: "Create your restaurant profile and create menu items"
    },
    {
        number: 3,
        image: icons.orderHistory,
        descr: "Start receiving orders"
    },
]


const LandPage = () => {
    const styles = {
        steps: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "60px",
            
        },
        step: {
            width: "10%",
            // backgroundColor: "black",
            // margin: "10px auto"
            // padding: "10px auto"
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            background: "#FFFFFF",
            border:" 1px solid #DFE0EB",
            borderRadius:"10px",
            height: "160px",
            justifyContent: "center"
        },
        logo: {
            fontSize: "54px",
            color: "#fff",
            paddingLeft: "5%"
        },
        authOptions: {
            // width: "90%",
            // backgroundColor: "pink",
            // margin: "0 0 0 25%",
            // textAlign: "center"
            paddingLeft: "20%"

        },
        register: {
            background: "#F7941D",
            boxShadow: "0px 4px 12px rgba(55, 81, 255, 0.24)",
            borderRadius: "8px",
            padding: "10px",
            width: "22%",
            color: "white"
        },
        signin: {
            boxShadow: "0px 4px 12px rgba(55, 81, 255, 0.24)",
            borderRadius: "8px",
            background: "none",
            // padding: "10px 55px"
            width: "25%",
            padding: "10px",
            color: "white"
        }
    }
    return(
        <div>
            <div style={{backgroundColor: "#000", height: "40vh"}}>
                <div style={{height: "15vh"}}>
                    <h1 style={styles.logo}>Supa<span style={{color: "#f7941d"}}>Menu</span></h1>
                    {/* <div style={styles.}>
                        <img src={icons.searchIcon} alt="" />
                        <img src={icons.notifyHeader} alt="" />
                        <span>Jacques Kagabo</span>
                        <img src={icons.profile} alt="" />
                    </div> */}
                </div>
                <div style={styles.authOptions}>
                    <p style={{color: "#fff", fontSize: "26px", fontWeight: "bold"}}>Register your restaurant on SupaMenu</p>
                    <span style={{color: "#fff", marginTop: "1%", display: "inline-block"}}>for free and get more revenue!</span>
                    <div style={{marginTop: "1%"}}>
                        <button style={styles.register}>Register your Restaurant</button>
                        <button style={styles.signin}>Restaurant already registered? Signin</button>
                    </div>
                </div>
            </div>
            <div >
                <h1 style={{textAlign: "center", margin: "1% 0"}}>How it works</h1>
                <div style={styles.steps}>
                    {steps.map((step) => {
                        return (
                            <div style={styles.step}>
                                <img style={{width: "50px"} } src={step.image} alt="" />
                                <p style={{fontWeight: "bold", margin: "-1px 0 0px"}}>Step {step.number}</p>
                                <p style={{fontSize: "12px", margin: "0px", fontWeight: "lighter", color: "#464649"}}>{step.descr}</p>
                            </div>
                        )                        
                    })}
                </div>
            </div>
        </div>
    )
}

export default LandPage;