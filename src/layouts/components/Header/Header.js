import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import config from "../../../config";
import styles from "./Header.module.scss";
import images from "../../../assets/image";

const cx = classNames.bind(styles);

function Header({ onShowSidebar }) {
	// const currentUser = true

	return (
		<header className={cx("wrapper")}>
			<button onClick={onShowSidebar}>Toggle</button>
			<div>Header</div>
		</header>
	);
}

export default Header;
