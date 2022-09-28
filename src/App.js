// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { publicRoutes } from "./routes";
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
