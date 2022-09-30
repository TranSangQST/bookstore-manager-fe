// lib
import classNames from "classnames/bind";

// custom
import MenuItem from "./MenuItem/MenuItem";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function Menu({ title, items, children }) {
	return (
		<div className={cx("wrapper")}>
			<h3 className={cx("title")}>{title}</h3>
			{items
				? items.map((menuItem, index) => {
						console.log("menuItem: ", menuItem);
						return (
							<MenuItem
								key={index}
								title={menuItem.title}
								icon={menuItem.icon}
								to={menuItem.to}
								subItems={menuItem.children}
							/>
						);
				  })
				: children}
		</div>
	);
}

export default Menu;
