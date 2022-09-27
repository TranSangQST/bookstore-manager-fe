import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import config from "../../../config";
import styles from "./Header.module.scss";
import images from "../../../assets/image";

const cx = classNames.bind(styles);

function Header() {
	// const currentUser = true

	return (
		<header className={cx("wrapper")}>
			Header
			{/*<div className={cx("inner")}>*/}
			{/*	<Link to={config.routes.home} className={cx("logo-link")}>*/}
			{/*		<img src={images.logo} alt="Logo" />*/}
			{/*	</Link>*/}
			{/*</div>*/}
		</header>
	);
}

export default Header;
