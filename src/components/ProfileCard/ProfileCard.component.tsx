import React, { Component } from "react";
import { Card, Button, Row } from "react-bootstrap";
import styles from "./ProfileCard.module.scss";
import SpanIcon from "../SpanIcon/SpanIcon.component";

type socialLinks = {
	[index: string]: string;
	linkedin: string;
	facebook: string;
	github: string;
	stackoverflow: string;
};
interface member {
	name: string;
	subtitle: string;
	img?: string;
	secImg?: string;
	socialLinks?: socialLinks;
	placeholderImg?: string;
	imgError?: boolean;
}

const SocialLinkSetComponent = ({ socialLinks }: { socialLinks: socialLinks }) => {
	const socialLinkSet = Object.keys(socialLinks).map((platform, index) => {
		return (
			<Card.Link href={socialLinks[platform]} target="_blank" className="col" key={index}>
				<SpanIcon name={platform}></SpanIcon>
			</Card.Link>
		);
	});
	return <>{socialLinkSet}</>;
};

class ProfileCard extends Component<member, member> {
	constructor(props: member) {
		super(props);
		this.state = { ...this.props, ...{ placeholderImg: `https://robohash.org/${encodeURI(this.state.name)}?size=400x400`, imgError: false } };
	}

	replaceImgOnError = () => {
		if (!this.state.imgError) {
			this.setState({
				img: this.state.placeholderImg,
				imgError: true,
			});
		}
	};

	render() {
		const member = this.state;
		return (
			<>
				<Card className={styles.card + " h-100"}>
					<div style={{ overflow: "hidden" }}>
						<Card.Img variant="top" src="" onError={this.replaceImgOnError} />
					</div>
					<Card.Body className="pb-0">
						<Card.Title>{member.name}</Card.Title>
						<Card.Text>{member.subtitle}</Card.Text>
					</Card.Body>
					<Card.Footer className={styles.socialLinkSet}>
						<Row xs={4} noGutters>
							{member.socialLinks === undefined ? null : <SocialLinkSetComponent socialLinks={member.socialLinks} />};
						</Row>
					</Card.Footer>
					<Card.Footer>
						<Button variant="info" block>
							Know More
						</Button>
					</Card.Footer>
				</Card>
			</>
		);
	}
}

export default ProfileCard;
