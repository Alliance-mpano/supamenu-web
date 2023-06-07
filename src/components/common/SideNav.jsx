import React from "react"
import { icons } from "../../constants"
import { ErrorBoundary } from "react-error-boundary"

import ErrorFallback from "../../utils/ErrorBoundary";
import OneLink from "./OneLink";
import "./sideNav.styles.css"
const SideNav = () => {

    const styles = {        
        sidebar: {
            width: "20%",
            height: "100vh",
            overflowY: "auto",
            position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "#000",
        },
        
        sidebarHeader:{
            display: "flex",
            flexDirection: "column",
            height: "10vh",
            justifyContent: "space-around",
            alignItems: "center",

            gap: "5px"
        },
        profile: {
            width: "35%",
        },
        linkContainer: {
            // width: "88%",
            margin: "0px auto",
            height: "70vh",
            // borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "3vh 0px"
        }
    }
    const linkData = [
        {
            icon: icons.overView,
            text: "Overview",
            path: "/app"
        },
        {
            icon: icons.tables,
            text: "Tables",
            path: "/app/tables"
        },
        {
            icon: icons.orders,
            text: "Orders",
            path: "/app/orders"
        },
        {
            icon: icons.menu,
            text: "Menu",
            path: "/app/menu"
        }
    ]
    const bottom = [
        {
            icon: icons.settings,
            text: "Settings"
        },
        {
            icon: icons.account,
            text: "My Account"
        }
    ]
    const links = linkData.map((link,index) => {
        return <OneLink key={index} icon = {link.icon} text={link.text} path={link.path} />
    })
    const bottomLinks = bottom.map((link,index) => {
        return <OneLink key={index} icon = {link.icon} text={link.text} path={link.path} />
    })
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
        <section style={ styles.sidebar} >
                <div style={styles.sidebarHeader}>
                    {/* <img src={icons.profile} style={styles.profile} alt="Admin profile picture"/> */}
                    <p style={{color:"#fff"}}>SupaMenu</p>
                </div>
                <div className="linkContainer" style={styles.linkContainer}>
                    {links}
                </div>
                <div style={{position: "absolute", bottom: "0",left: "50px", padding: "0 15px"}}>
                    {bottomLinks}
                </div>
            
        </section>
        </ErrorBoundary>
    )
}

export default SideNav;