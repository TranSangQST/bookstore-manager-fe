import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import config from "../../../config";
export const sidebarMenuDatas = [
	{
		title: "Core",
		children: [
			{
				title: "Dashboard",
				to: config.routes.dashboard,
				icon: <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>,
			},
			{
				title: "Sale",
				children: [
					{
						title: "List",
						to: config.routes.sale,
					},
					{
						title: "Add",
						to: config.routes.addSale,
					},
				],
				icon: <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>,
			},
			{
				title: "Import",
				children: [
					{
						title: "List",
						to: config.routes.import,
					},
					{
						title: "Add",
						to: config.routes.addImport,
					},
				],
				icon: <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>,
			},
		],
	},
];
