import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import SpanIcon from "../SpanIcon/SpanIcon.component";

const Header = ({ teamBrand }: { teamBrand: string }) => {
	return (
		<Navbar variant="dark" expand="md" className="sticky-top" bg="primary">
			<Navbar.Brand href="#">{teamBrand}</Navbar.Brand>
			<Navbar.Toggle aria-controls="navbarSupportedContent" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home" active>
						Home
					</Nav.Link>
					<Nav.Link href="#aboutPage">About This Page</Nav.Link>
				</Nav>
				<div className="mr-sm-2">
					<a href="https://github.com/ShivamS136/Team-Profile" rel="noreferrer" target="_blank">
						<Button variant="outline-light" className="my-2 my-sm-0" type="submit">
							<SpanIcon name="github"></SpanIcon> Github
						</Button>
					</a>
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
