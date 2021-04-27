import "./Layout.css"
import Navbar from "../Navbar/Navbar"

const Layout = (props) => (
  <div className='layout'>
    <Navbar />
    <div className="layout-children">
      {props.children}
    </div>
  </div>
)

export default Layout