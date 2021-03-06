import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Characters } from "./views/personajes.js";
import { Planets } from "./views/planets.js";
import { Vehicles } from "./views/vehicles.js";
import { Detalle } from "./views/detalle.js";

import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						{/* Importo los componentes custom */}
						<Route exact path="/personajes">
							<Characters />
						</Route>
						<Route exact path="/vehiculos">
							<Vehicles />
						</Route>
						<Route exact path="/planetas">
							<Planets />
						</Route>

						<Route exact path="/people/:id">
							<Detalle type="people" />
						</Route>

						<Route exact path="/vehicles/:id">
							<Detalle type="vehicles" />
						</Route>

						<Route exact path="/planets/:id">
							<Detalle type="planets" />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
