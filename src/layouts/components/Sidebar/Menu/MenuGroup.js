import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuGroup({ title, children }) {
	// return <nav className={cx("wrapper")}>{children}</nav>;

	const [open, setOpen] = useState(false);

	console.log("children: ", children);

	return (
		<div className={cx("group")}>
			<a className={cx("title")} onClick={() => setOpen(!open)}>
				{title}
			</a>
			<Collapse in={open}>
				<div className={cx("group-list")}>{children}</div>
			</Collapse>
		</div>
	);
}

MenuGroup.propTypes = {
	children: PropTypes.node.isRequired,
};

export default MenuGroup;
