import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const Header = ({ teamBrand }: { teamBrand: string }) => {
	return (
		<Navbar bg="dark" expand="md" className="sticky-top">
			<Navbar.Brand href="#">{teamBrand}</Navbar.Brand>
		</Navbar>
	);
};

export default Header;
