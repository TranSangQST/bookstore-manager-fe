import { useState } from "react";

import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Menu, { MenuItem } from "./Menu";

// import config from "../../../config";
import styles from "./Sidebar.module.scss";
import MenuGroup from "./Menu/MenuGroup";

const cx = classNames.bind(styles);

function Sidebar({ sidebar }) {
	// const currentUser = true

	// console.log("sidebar in Sidebar: ", sidebar);

	const [open, setOpen] = useState(false);

	return (
		<div className={sidebar ? cx("wrapper") : cx("wrapper", "hide")}>
			<Menu title="Core" to="https://tiktok.fullstack.edu.vn/api/">
				<MenuItem
					title="Sang1"
					to="https://tiktok.fullstack.edu.vn/api/">
					<MenuItem
						title="Sang1a"
						to="https://tiktok.fullstack.edu.vn/api/"></MenuItem>
					<MenuItem
						title="Sangb"
						to="https://tiktok.fullstack.edu.vn/api/">
						<MenuItem
							title="Sangbx"
							to="https://tiktok.fullstack.edu.vn/api/"></MenuItem>
						<MenuItem
							title="Sangy"
							to="https://tiktok.fullstack.edu.vn/api/"></MenuItem>
					</MenuItem>
				</MenuItem>
				<MenuItem
					title="Sang2"
					to="https://tiktok.fullstack.edu.vn/api/"></MenuItem>
			</Menu>

			{/* <Menu title="core">
				<MenuItem
					title="Dashboard"
					to="https://tiktok.fullstack.edu.vn/api/"
				/>

				<MenuGroup title={"Mua"}>
					<MenuItem
						title="Danh sách"
						to="https://tiktok.fullstack.edu.vn/api/"
					/>
					<MenuItem
						title="Lập phiếu"
						to="https://tiktok.fullstack.edu.vn/api/"
					/>
				</MenuGroup>
			</Menu> */}
		</div>
	);
}

export default Sidebar;
