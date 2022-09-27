import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import config from "../../../config";
import styles from "./Sidebar.module.scss";

const cx = classNames.bind(styles);

function Sidebar() {
	// const currentUser = true

	return <nav className={cx("wrapper")}>Sidebar</nav>;
}

export default Sidebar;
