import React from "react";
import { icons } from "../../constants";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../utils/ErrorBoundary";
import {NavLink} from "react-router-dom"
import './OneLink.styles.css'

const OneLink = ({icon, text, path}) => {
    const styles = {
        link:{
            width: "70%",
            margin: "0px auto",
            display: "flex",
            gap: "15px",
            color: "#A4A6B3",
            fontSize: "16px",
            fontWeight: "400",
            height: "5vh",
            fontStyle: "normal",
            padding: "0px auto",
            minWidth: "fit-content",
            textDecoration: "none",
            // alignSelf: "center"
            // textAlign: "center"
        },
        linkText: {
            lineHeight: "5vh"
        },
        image: {
            margin: "auto 0",
        }
    }
    return(
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <NavLink to={path}  className={({isActive, isPending}) => {
                isActive ? "active": isPending ? "pending": ""
            }} style={styles.link} >
            <img style={styles.image} src={icon}/>
            <span style={styles.linkText}>{text}</span>
            </NavLink>
        </ErrorBoundary>
        
    );
}

export default OneLink;