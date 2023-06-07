import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideNav from './components/common/SideNav'
import Order from './components/common/Order';
import Overview from './components/overview/Overview'
import ShortView from './components/common/ShortView'
import Orders from './components/orders/Orders'
import Table from './components/table/Table'
import MenuItem from './components/menu/MenuItem'
import Menu from './components/menu/Menu'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const styles = {
    app:{
      position: "relative",
      height: "100vh",
      backgroundColor:"#F7F8FC"
    },
    main: {
      marginLeft: "20%",
      padding:"1.5%"
      // backgroundColor: "#F5F5F5"
    },
  }
  return (
    <>
      <div style={styles.app}>
        <SideNav />
      
        <main style={styles.main}>
          <Outlet/>
          {/* <Overview /> */}
          {/* <Orders/> */}
          {/* <Table/> */}
          {/* <Menu/> */}
        </main>
      </div>
    </>
  )
}

export default App
