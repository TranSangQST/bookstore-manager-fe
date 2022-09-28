import classNames from "classnames/bind";
// import { Link } from "react-router-dom";

// import config from "../../../config";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar({ sidebar }) {
	// const currentUser = true

	console.log("sidebar in Sidebar: ", sidebar);

	return (
		<nav className={sidebar ? cx("wrapper") : cx("wrapper-hide")}>
			Sidebar
		</nav>
	);
}

export default Sidebar;
