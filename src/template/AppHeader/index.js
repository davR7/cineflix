import "./style.css";
import CineflixLogo from "../../components/CineflixLogo";
import AppSearchBar from "../AppSearchBar";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <div className="app-header">
      <Link to="/">
        <CineflixLogo />
      </Link>
      <AppSearchBar />
    </div>
  );
};

export default AppHeader;
