import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./components/Table";
import Header from "./layouts/components/Header";
import Sidebar from "./layouts/components/Sidebar";
import Footer from "./layouts/components/Footer";

import { publicRoutes } from "./routes";
import Home from "./pages/Home";
import DefaultLayout from "./layouts/DefaultLayout/DefaultLayout";

// import { DefaultLayout } from "./layouts"
// import { Fragment } from "react"

function App() {
	return (
		<>
			<div className="App">
				<DefaultLayout>
					<Home />
				</DefaultLayout>
			</div>
			{/* <Router>
				<div className="App">
					<Routes>
						{publicRoutes.map((route, index) => {
							console.log("route: ", route);
							const Page = route.component;
							console.log("Page: ", <Page />);
							return (
								<Route
									key={index}
									path={route.path}
									element={<Page />}
								/>
							);
						})}
					</Routes>
				</div>
			</Router> */}
		</>
	);
}

export default App;
