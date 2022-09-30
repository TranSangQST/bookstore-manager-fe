// lib
import classNames from "classnames/bind";

// custom
import Menu from "./Menu";
import styles from "./Sidebar.module.scss";
import { sidebarMenuDatas } from "./SidebarData";

const cx = classNames.bind(styles);

function Sidebar({ sidebar }) {
	return (
		<div className={sidebar ? cx("wrapper") : cx("wrapper", "hide")}>
			{sidebarMenuDatas.map((menu, index) => {
				console.log("menu.children: ", menu.children);
				return (
					<Menu
						key={index}
						title={menu.title}
						items={menu.children}
					/>
				);
			})}
		</div>
	);
}

export default Sidebar;
