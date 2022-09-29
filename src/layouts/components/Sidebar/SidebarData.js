import config from "../../../config";
export const sidebarMenuDatas = [
	{
		title: "Core",
		children: [
			{
				title: "Dashboard",
				to: config.routes.dashboard,
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
			},
		],
	},
];
