import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes } from "./routes";
import Dashboard from "./pages/Dashboard";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";

// import { Fragment } from "react"

function App() {
	return (
		<>
			{/* <div className="App">
				<DefaultLayout>
					<Dashboard />
				</DefaultLayout>
			</div> */}
			<Router>
				<div className="App">
					<Routes>
						{publicRoutes.map((route, index) => {
							let Layout = route.layout;
							// console.log("route: ", route);
							const Page = route.component;
							// console.log("Page: ", <Page />);
							return (
								<Route
									key={index}
									path={route.path}
									element={
										<Layout>
											<Page />
										</Layout>
									}
								/>
							);
						})}
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
