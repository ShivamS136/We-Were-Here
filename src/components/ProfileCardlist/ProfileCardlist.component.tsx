import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ProfileCardlist.module.css";
import ProfileCard from "../ProfileCard/ProfileCard.component";

type TypeMemberList = {
	memberList: TypeMember[];
};

const ProfileCardMapComponent = ({ memberList }: { memberList: TypeMember[] }) => {
	const ProfileCardMap = memberList.map((member: TypeMember, index) => {
		return (
			<Col className="p-3">
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
				<Container>
					<Row xs={1} sm={2} md={3} noGutters>
						<ProfileCardMapComponent memberList={this.state.memberList} />
					</Row>
				</Container>
			</Container>
		);
	}
}

export default ProfileCardlist;
