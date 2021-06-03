import React from "react";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import Particles from "react-tsparticles";
import styles from "./JumboHeader.module.scss";
import HeroImg from "../../assets/img/hero-illustration.svg";
import { ReactComponent as BottomWaveSvg } from "../../assets/img/bottom-wave.svg";

const ParticlesData = require("./particles.json");
const JumboHeader = ({ teamName }: { teamName: string }) => {
	return (
		<>
			<Jumbotron fluid className={`${styles.JumboHeader}` + " m-0 pb-0"}>
				<Container>
					<Row>
						<Col xs={12} sm={{ span: 6, order: 2 }} className="pb-5 pb-sm-3 text-center">
							<Image src={HeroImg} alt="Hero" style={{ maxWidth: "400px" }} />
						</Col>
						<Col xs={12} sm={{ span: 6, order: 1 }} className="pb-5 pb-sm-3">
							<h1 className="display-4">
								Kudos to the awesome team: <span>{teamName}</span>
							</h1>
							<p className="lead">Let's appreciate the awesome people who created this awesome product. These are the people behind the scene.</p>
						</Col>
					</Row>
				</Container>
				<Particles options={ParticlesData} className={styles.particlesJsDiv} />
			</Jumbotron>
			<Container fluid className="p-0">
				<div className={styles.customShapeDividerTop}>
					<BottomWaveSvg />
				</div>
			</Container>
		</>
	);
};

export default JumboHeader;
