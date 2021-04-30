import "./Layout.css";
import Navbar from "../Navbar/Navbar";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="layout">
      <Navbar currentUser={currentUser} handleLogout={handleLogout} />
      <div className="layout-children">{props.children}</div>
    </div>
  );
}
