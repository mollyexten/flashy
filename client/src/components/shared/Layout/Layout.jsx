import "./Layout.css";
import Navbar from "../Navbar/Navbar";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="layout">
      <Navbar currentUser={currentUser} handleLogout={handleLogout} />
      <main className="layout-children">{props.children}</main>
    </div>
  );
}
