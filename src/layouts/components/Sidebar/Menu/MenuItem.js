import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { NavLink } from "react-router-dom";
import styles from "./MenuItem.module.scss";
// import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ title, to, children }) {
	const [open, setOpen] = useState(false);

	console.log("children: ", children);

	// return (
	// 	<a className={cx("item")} href={to}>
	// 		{title}
	// 	</a>
	// );
	return children ? (
		<div className={cx("sub-menu")}>
			<a className={cx("title")} onClick={() => setOpen(!open)}>
				{title}
			</a>
			<Collapse in={open}>
				<div className={cx("items")}>{children}</div>
			</Collapse>
		</div>
	) : (
		<NavLink className={cx("item")} to={to}>
			{title}
		</NavLink>
		// <a className={cx("item")} href={to}>
		// </a>
	);

	// return children ? (
	// 	<div className={cx("sub-menu")}>
	// 		<a className={cx("title")} onClick={() => setOpen(!open)}>
	// 			{title}
	// 		</a>
	// 		<Collapse in={open}>
	// 			<div className={cx("sub-menu-items")}>{children}</div>
	// 		</Collapse>
	// 	</div>
	// ) : (
	// 	<a className={cx("title")} onClick={() => setOpen(!open)}>
	// 		{title}
	// 	</a>
	// );

	return (
		// <NavLink className={cx("menu-item")} to={to}>
		// 	<span className={cx("menu-item-title")}>{title}</span>
		// </NavLink>

		//  ? (
		// 	// <div className={cx("group")}>
		// 	// 	<a className={cx("title")} onClick={() => setOpen(!open)}>
		// 	// 		{title}
		// 	// 	</a>
		// 	// 	<Collapse in={open}>
		// 	// 		<div className={cx("group-list")}>{children}</div>
		// 	// 	</Collapse>
		// 	// </div>

		// 	{ children }
		// ) :
		{ children } && (
			<a className={cx("item")} href={to}>
				{title}
			</a>
		)
	);
}

MenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};

export default MenuItem;
