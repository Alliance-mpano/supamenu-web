import React from "react";
import { Link } from "react-router-dom";
import "./login.styles.css"

const Login = () => {

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
        link: {
            color: "#3751FF", textDecoration: "none"
        }
    }

    return(
        <div style={{display: "flex", backgroundColor: "#F7941D", height: "100vh", padding: "0 100px", justifyContent: "space-around"}}>
            <div style={{width: "30%", lineHeight: "100vh"}} ><p style={{fontSize: "60px", color: "#fff", fontWeight:"bolder"}}><span style={{color: "#000"}}>Supa</span>Menu</p></div>
            <div style={{ marginTop:"10%",display: "flex", flexDirection: "column", gap: "10px",alignItems: "center" ,width: "35%", backgroundColor: "#fff", height:"60vh", borderRadius: "8px", border: "1px solid #DFE0EB",paddingTop: "40px"}}>
                <p style={{marginBottom: "10px"}}>Welcome</p>
                <p style={{fontWeight: "bold", fontSize: "20px"}}>Login to SupaMenu</p>
                <p style={{letterSpacing: "0.3px",color: "#9FA2B4"}}>Enter your email and password below</p>
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
                <button className="signin">Sign In</button>
                 <p style={{color: "#9FA2B4", fontSize: "14px"}}>Don't have account? <Link to = "/signUp" style={styles.link}><b>Sign Up</b></Link></p>
                 <p style={{color: "#9FA2B4", fontSize: "14px"}}>Forgot your password? <Link to = "/signUp" style={styles.link}><b>RESET</b></Link></p>
            </div>
        </div>
    )
}

export default Login;