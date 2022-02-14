import "./styles/styles.css";
import "./utils/utils";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
}
