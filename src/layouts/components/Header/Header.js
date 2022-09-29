import classNames from "classnames/bind";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import Image from "../../../components/Image";

// import config from "../../../config"
import styles from "./Header.module.scss";

// import images from "../../../assets/image";

const cx = classNames.bind(styles);

function Header({ sidebar, onShowSidebar }) {
	// const currentUser = true

	return (
		<header className={cx("wrapper")}>
			<div className={cx("header-left")}>
				<a className={cx("header-brand")} href="/">
					Book Store Manager
				</a>
				<button
					className={cx("btn-sidebar-toggle")}
					onClick={onShowSidebar}>
					<FontAwesomeIcon
						className={cx("icon")}
						icon={sidebar ? faXmark : faBars}
					/>
				</button>
			</div>
			<div className={cx("header-right")}>
				<Image
					className={cx("header-avatar")}
					alt="avatar"
					src="https://www.pngall.com/wp-content/uploads/2016/04/Happy-Person-Free-Download-PNG.png"
				/>
			</div>
		</header>
	);
}

export default Header;
