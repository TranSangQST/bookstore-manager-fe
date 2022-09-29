import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";

import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu({ title, children }) {
	// return <nav className={cx("wrapper")}>{children}</nav>;

	const [open, setOpen] = useState(false);

	console.log("children: ", children);

	return (
		<div className={cx("wrapper")}>
			<h3 className={cx("title")}>{title}</h3>
			{children}
		</div>
	);
}

// function Menu({ group, title, children }) {
// 	// return <nav className={cx("wrapper")}>{children}</nav>;

// 	const [open, setOpen] = useState(false);

// 	console.log("children: ", children);

// 	return group ? (
// 		<div className={cx("wrapper")}>
// 			<a className={cx("title")} onClick={() => setOpen(!open)}>
// 				{title}
// 			</a>
// 			<Collapse in={open}>
// 				<div className={cx("group")}>{children}</div>
// 			</Collapse>
// 		</div>
// 	) : (
// 		<div className={cx("wrapper")}> {children}</div>
// 	);
// }

Menu.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Menu;
