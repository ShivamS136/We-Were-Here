import React, { Component } from "react";
import { Card, Button, Row } from "react-bootstrap";
import styles from "./ProfileCard.module.scss";
import SpanIcon from "../SpanIcon/SpanIcon.component";

const SocialLinkSetComponent = ({ socialLinks }: { socialLinks: TypeSocialLinks }) => {
	const objKeys = Object.keys(socialLinks) as (keyof TypeSocialLinks)[];
	const socialLinkSet = objKeys.map((platform, index) => {
		return (
			<Card.Link href={socialLinks[platform]} target="_blank" className="col" key={index}>
				<SpanIcon name={platform}></SpanIcon>
			</Card.Link>
		);
	});
	return <>{socialLinkSet}</>;
};

interface TypeProp {
	member: TypeMember;
}

interface TypeState extends TypeMember {
	placeholderImg: string;
	imgError: boolean;
}

class ProfileCard extends Component<TypeProp, TypeState> {
	constructor(props: TypeProp) {
		super(props);
		this.state = { ...this.props.member, ...{ placeholderImg: `https://robohash.org/${encodeURI(this.props.member.name)}?size=400x400`, imgError: false } };
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
						<Card.Img className={styles["card-img-top"]} variant="top" src={member.img} onError={this.replaceImgOnError} />
					</div>
					<Card.Body className="pb-0">
						<Card.Title>{member.name}</Card.Title>
						<Card.Text>{member.subtitle}</Card.Text>
					</Card.Body>
					<Card.Footer className={styles.socialLinkSet}>
						<Row xs={4} noGutters>
							{member.socialLinks === undefined ? null : <SocialLinkSetComponent socialLinks={member.socialLinks} />}
						</Row>
					</Card.Footer>
					<Card.Footer>
						<Button variant="info" className={styles["btn-info"]} block>
							Know More
						</Button>
					</Card.Footer>
				</Card>
			</>
		);
	}
}

export default ProfileCard;
