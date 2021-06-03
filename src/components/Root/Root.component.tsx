import React, { Component } from "react";
import sitedata from "../../sitedata";

import Header from "../Header/Header.component";
import JumboHeader from "../JumboHeader/JumboHeader.component";
import ProfileCardList from "../ProfileCardlist/ProfileCardlist.component";

class RootComponent extends Component {
	constructor(props: any) {
		super(props);
	}
	render() {
		return (
			<>
				<Header teamBrand={sitedata.master.teamBrand} />
				<JumboHeader teamName={sitedata.master.teamName} />
				<ProfileCardList memberList={sitedata.members} />
			</>
		);
	}
}

export default RootComponent;
