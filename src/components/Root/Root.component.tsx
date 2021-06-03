import React, { Component } from "react";
import sitedata from "../../sitedata";

import Header from "../Header/Header.component";
import JumboHeader from "../JumboHeader/JumboHeader.component";

class RootComponent extends Component {
	constructor(props: any) {
		super(props);
		// this.state = sitedata;
	}
	render() {
		return (
			<>
				<Header teamBrand={sitedata.master.teamBrand} />
				<JumboHeader teamName={sitedata.master.teamName} />
			</>
		);
	}
}

export default RootComponent;
