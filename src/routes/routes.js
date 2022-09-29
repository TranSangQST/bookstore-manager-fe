import config from "../config";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";

// Layouts

// Pages
import Dashboard from "../pages/Dashboard";
import Sale from "../pages/Sale";
import Import from "../pages/Import";

// Public routes

const publicRoutes = [
	{
		path: config.routes.dashboard,
		component: Dashboard,
		layout: DefaultLayout,
	},
	{ path: config.routes.sale, component: Sale, layout: DefaultLayout },
	{ path: config.routes.addSale, component: Sale, layout: DefaultLayout },
	{ path: config.routes.import, component: Import, layout: DefaultLayout },
	{ path: config.routes.addImport, component: Import, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
