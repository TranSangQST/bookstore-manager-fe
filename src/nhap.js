import React from "react";
import logo from "./logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	Container,
	Row,
	Col,
	Button,
	Alert,
	Form,
	Nav,
	Navbar,
	NavDropdown,
} from "react-bootstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLogin } from "react-google-login";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaGem, FaHeart, FaHelicopter, FaInfo } from "react-icons/fa";
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBInput,
	MDBBtn,
	MDBCard,
	MDBCardBody,
} from "mdbreact";
import Carousel from "react-bootstrap/Carousel";
function App() {
	return (
		<div className="App">
			<header>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#features">Home</Nav.Link>
							<Nav.Link href="#pricing"> Destinations</Nav.Link>
							<NavDropdown
								title="Dropdown2"
								id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">
									Travel Heros
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">
									Plan your trip
								</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">
									Why a travel advisitor
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Promotion
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav>
							<Navbar.Brand href="#home">
								<Form>
									<Row md>
										<Col>
											<Form.Group controlId="formEmail">
												<Form.Control
													type="email"
													placeholder="Exemple@email.com"
												/>
											</Form.Group>
										</Col>
										<Col>
											<Form.Group controlId="formPassword">
												<Form.Control
													type="password"
													placeholder="password"
												/>
											</Form.Group>
										</Col>
										<Col className="social">
											<Button
												variant="primary"
												type="submit">
												Sign in
											</Button>
										</Col>
									</Row>
								</Form>
							</Navbar.Brand>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<ProSidebar className="sidebar">
					<Menu iconShape="square">
						<MenuItem icon={<FaGem />}>Dashboard</MenuItem>
						<SubMenu title="Components" icon={<FaHeart />}>
							<MenuItem>Component 1</MenuItem>
							<MenuItem>Component 2</MenuItem>
						</SubMenu>
						<SubMenu title="Components" icon={<FaHelicopter />}>
							{" "}
							Menu
						</SubMenu>
						<MenuItem icon={<FaInfo />}>Dashboard</MenuItem>
					</Menu>
				</ProSidebar>
				<Container className="container">
					<Row>
						<Col>
							<Form>
								<h1>Subscribe </h1>
								<Form.Row>
									<Form.Group
										as={Col}
										controlId="formGridEmail">
										<Form.Label>Email</Form.Label>
										<Form.Control
											type="email"
											placeholder="Enter email"
										/>
									</Form.Group>

									<Form.Group
										as={Col}
										controlId="formGridPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Password"
										/>
									</Form.Group>
								</Form.Row>

								<Form.Group controlId="formGridAddress1">
									<Form.Label>Address</Form.Label>
									<Form.Control placeholder="1234 Main St" />
								</Form.Group>
								<Form.Row>
									<Form.Group
										as={Col}
										controlId="formGridCity">
										<Form.Label>City</Form.Label>
										<Form.Control />
									</Form.Group>

									<Form.Group
										as={Col}
										controlId="formGridState">
										<Form.Label>State</Form.Label>
										<Form.Control
											as="select"
											defaultValue="Choose...">
											<option>Choose...</option>
											<option>...</option>
										</Form.Control>
									</Form.Group>
								</Form.Row>

								<Form.Group id="formGridCheckbox">
									<Form.Check
										type="checkbox"
										label="Check me out"
									/>
								</Form.Group>

								<Button variant="primary" type="submit">
									Sign up
								</Button>
								<Form.Text>
									{" "}
									Or Connect with you Social Media{" "}
								</Form.Text>
								<FacebookLoginButton />
								<GoogleLogin />
							</Form>
						</Col>
						<Col>
							<Carousel m-7>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src="https://picsum.photos/800/400?text=First slide&bg=373940"
										alt="First slide"
									/>
									<Carousel.Caption>
										<h3>First slide label</h3>
										<p>
											Nulla vitae elit libero, a pharetra
											augue mollis interdum.
										</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src="https://picsum.photos/800/400?text=Second slide&bg=282c34"
										alt="Third slide"
									/>

									<Carousel.Caption>
										<h3>Second slide label</h3>
										<p>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit.
										</p>
									</Carousel.Caption>
								</Carousel.Item>
								<Carousel.Item>
									<img
										className="d-block w-100"
										src="https://picsum.photos/800/400?text=Third slide&bg=20232a"
										alt="Third slide"
									/>

									<Carousel.Caption>
										<h3>Third slide label</h3>
										<p>
											Praesent commodo cursus magna, vel
											scelerisque nisl consectetur.
										</p>
									</Carousel.Caption>
								</Carousel.Item>
							</Carousel>
							<Alert variant="success">
								<Alert.Heading>
									{" "}
									Voyager c’est évoluer
								</Alert.Heading>
								<p>
									« Un voyage est la seule chose qui s’achète
									et vous rend plus riche. » <br></br>« Une
									fois par an, visitez un lieu où vous n’êtes
									jamais allé auparavant. » Dalai Lama{" "}
									<br></br>« Une fois que l’on a été piqué par
									la mouche du voyage, il n’existe aucun
									antidote connu et, en ce qui me concerne, je
									serai joyeusement infecté jusqu'à la fin de
									mes jours. » Michael Palin
								</p>
								<hr />
								<p className="mb-0">
									Le plus beau voyage, c'est celui qu’on a pas
									encore fait.
								</p>
							</Alert>
						</Col>
					</Row>
				</Container>
			</header>
			<div class="d-flex flex-column">
				<footer class="footerr">
					<div>
						<a href="https://coreui.io">CoreUI</a>
						<span>&copy; 2020 creativeLabs.</span>
					</div>
					<div class="ml-auto">
						<span>Powered by</span>
						<a href="https://coreui.io">CoreUI</a>
					</div>
				</footer>
			</div>
		</div>
	);
}

export default App;
