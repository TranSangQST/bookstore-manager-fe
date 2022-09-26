import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { publicRoutes } from "./routes"

// import { DefaultLayout } from "./layouts"
// import { Fragment } from "react"

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					{publicRoutes.map((route, index) => {
						// console.log("route: ", route)
						const Page = route.component
						return (
							<Route
								key={index}
								path={route.path}
								element={<Page />}
							/>
						)
					})}
				</Routes>
			</div>
		</Router>
	)
}

export default App
