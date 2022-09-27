import PropTypes from "prop-types";

import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
	const [sidebar, setSidebar] = useState(true);

	console.log("sidebar in layout: ", sidebar);

	const handleShowSidebar = () => {
		console.log("handleShowSidebar");
		setSidebar(!sidebar);
	};

	return (
		<div className={cx("wrapper")}>
			<Header onShowSidebar={handleShowSidebar} />
			<div className={cx("container")}>
				<Sidebar sidebar={sidebar} />
				<div className={cx("content")}>{children}</div>
			</div>
		</div>
	);
}

DefaultLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DefaultLayout;
