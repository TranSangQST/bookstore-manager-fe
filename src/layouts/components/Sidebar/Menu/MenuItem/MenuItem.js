// lib
import classNames from "classnames/bind";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";

// custom
import styles from "./MenuItem.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, children, subItems }) {
	const [open, setOpen] = useState(false);

	const Icon = icon;

	return subItems || children ? (
		<div className={cx("sub-menu")}>
			{/* <Icon></Icon> */}
			<div className={cx("header")} onClick={() => setOpen(!open)}>
				<h3 className={cx("title")}>{title}</h3>
				<FontAwesomeIcon
					className={cx("icon")}
					icon={open ? faCaretDown : faCaretRight}></FontAwesomeIcon>
			</div>

			{console.log(open)}
			<Collapse in={open}>
				<div className={cx("items")}>
					{subItems
						? subItems.map((subItem, index) => {
								console.log("subitem: ", subItem);
								return (
									<MenuItem
										key={index}
										to={subItem.to}
										icon={subItem.icon}
										title={subItem.title}
										subItems={subItem.children}
									/>
								);
						  })
						: children}
				</div>
			</Collapse>
		</div>
	) : (
		<NavLink className={cx("item")} to={to}>
			<h3 className={cx("title")}>{title}</h3>
		</NavLink>
	);
}

export default MenuItem;
