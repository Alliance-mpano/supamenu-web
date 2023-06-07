import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: "",
        }
    )

    function handleChange (event) {
        const {name, value} = event.target;
        setFormData(oldFormData =>{
            return {
                ...oldFormData,
                [name]:value
            }
        });
    }
    const styles = {
        signup:{
            width:"80%",
            background:" #F7941D",
            boxShadow:" 0px 4px 12px rgba(55, 81, 255, 0.24)",
            borderRadius:" 8px",
            height:" 50px",
            color:" #fff",
            fontSize:" 16px",
            fontWeight:" 700",
            letterSpacing:" 0.1em",
            border:" none",
            margin:" 10px 0",
        },
        link: {
            color: "#3751FF", textDecoration: "none"
        }
    }
    return(
        <div style={{display: "flex", backgroundColor: "#F7941D", height: "100vh", padding: "0 100px", justifyContent: "space-around"}}>
             <div style={{width: "30%", lineHeight: "100vh"}} ><p style={{fontSize: "60px", color: "#fff", fontWeight:"bolder"}}><span style={{color: "#000"}}>Supa</span>Menu</p></div>
            <div style={{ marginTop:"4%",display: "flex", flexDirection: "column", gap: "10px",alignItems: "center" ,width: "35%", backgroundColor: "#fff", height:"75vh", borderRadius: "8px", border: "1px solid #DFE0EB",paddingTop: "40px"}}>
                <p>SignUp</p>
                <div className="row">
                    <label htmlFor="firstName">
                        FIRST NAME
                    </label>
                    <input
                        type="text" 
                        name = "firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        placeholder="First Name" 
                        id="firstName"
                    />
                </div>
                <div className="row">
                    <label htmlFor="lastName">
                        LAST NAME
                    </label>
                    <input 
                        type="text" 
                        name = "lastName" 
                        value= {formData.lastName} 
                        onChange={handleChange} 
                        placeholder="Last Name" 
                        id="lastName"
                    />
                </div>
                <div className="row">
                    <label htmlFor="phone">
                        PHONE
                    </label>
                    <input 
                        type="tel" 
                        name = "phone" 
                        value= {formData.phone} 
                        onChange={handleChange} 
                        placeholder="phone" 
                        id="phone"
                    />
                </div>
                <div className="row">
                    <label htmlFor="email">
                        EMAIL
                    </label>
                    <input
                        id="email"
                        type="email"
                        value = {formData.email}
                        onChange={handleChange}
                        name="email"
                        placeholder="Email address"
                    />
                </div>
                <div className="row">
                    <label htmlFor="password">PASSWORD</label>
                    <input 
                        value = {formData.password}
                        type="password"
                        name="password"
                        onChange={handleChange}
                        placeholder="Password"
                    />
                </div>
                <button style={styles.signup} className="signup">Sign Up</button>
                 <p style={{color: "#9FA2B4", fontSize: "14px"}}>Don't have account? <Link to = "/signUp"><b style={styles.link}>Sign Up</b></Link></p>
                 <p style={{color: "#9FA2B4", fontSize: "14px"}}>Forgot your password? <Link to = "/signUp"><b style={styles.link}>RESET</b></Link></p>
            </div>
        </div>
    )
}

export default SignUp;