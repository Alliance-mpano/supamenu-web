import React from "react"

const OneTable = () => {

    const styles = {
        orderCont: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "47%",
            background: "#F8F8FB",
            borderRadius: "16px",
            padding: "5px 15px",
            margin: "10px"
        },
        orderNbr: {
            color: "#F08F5F",
            fontWeight: "800",

        },
        orderDet: {
            color: "#363636",
            fontWeight: "lighter"
        },
        sameStyle: {
            color: "#363636", fontWeight: "500", fontSize: "12.5px"
        },
        ordered: {
            color: "color"
        },
        orderSpec: {color: " #F08F5F", fontSize: "12px", fontWeight: "bold"},
        status: {color: "#F08F5F", fontSize: "14px", fontWeight: "700"}
    }
    return(
        <>
            <div style={styles.orderCont}>
                <p style={styles.orderNbr}>Table |1</p>
                <div>
                    <p style={styles.orderDet}>Kaffir Lime Vodka, Lemongrass, Ginger, Citrus</p>
                    <p style={{lineHeight: "14px", color: "#494949", fontWeight: "500"}}>Tom Yummy | x 2</p>
                    <p style={styles.orderSpec}>__ <span style={styles.sameStyle}>Order 1</span> __</p>
                    <p>Served</p>
                </div>
                <div>
                    <p style={{lineHeight: "19px", color: "#F08F5F", fontWeight: "700"}}>Frw 5,000</p>
                    <p style={styles.orderSpec}>__ <span style={styles.sameStyle}>Ordering Guest</span> __</p>
                    <p style={styles.sameStyle}>0788123456</p>
                </div>
            </div>
        </>
    )
}

export default OneTable;