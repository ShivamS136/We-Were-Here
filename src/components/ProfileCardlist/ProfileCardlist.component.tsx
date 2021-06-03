import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ProfileCardlist.module.css";
import ProfileCard from "../ProfileCard/ProfileCard.component";

interface member {
	name: string;
	subtitle: string;
	img?: string;
	secImg?: string;
	socialLinks?: {
		linkedin?: string;
		facebook?: string;
		github?: string;
		stackoverflow?: string;
	};
}
type TypeMemberList = {
	memberList: member[];
};

const ProfileCardMapComponent = ({ memberList }: { memberList: member[] }) => {
	const ProfileCardMap = memberList.map((member: member, index) => {
		return (
			<Col>
				<ProfileCard member={member} key={index} />
			</Col>
		);
	});

	return <>{ProfileCardMap}</>;
};

class ProfileCardlist extends Component<TypeMemberList, TypeMemberList> {
	constructor(props: TypeMemberList) {
		super(props);
		this.state = JSON.parse(JSON.stringify(this.props));
	}
	render() {
		return (
			<Container fluid className={styles.contentBox + " py-5"}>
				<Row xs={1} sm={2} md={3} noGutters>
					<ProfileCardMapComponent memberArr={this.state.memberList} />
				</Row>
			</Container>
		);
	}
}

export default ProfileCardlist;
