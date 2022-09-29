import classNames from "classnames/bind";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// import styles from "./MenuItem.module.scss";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ title, to }) {
	return (
		// <NavLink className={cx("menu-item")} to={to}>
		// 	<span className={cx("menu-item-title")}>{title}</span>
		// </NavLink>

		<a className={cx("menu-item")} href={to}>
			{title}
		</a>
	);
}

MenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};

export default MenuItem;
