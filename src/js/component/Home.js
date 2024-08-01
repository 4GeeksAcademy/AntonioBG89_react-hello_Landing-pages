import React from "react";

import Cards from "./Cards";

import Navbar from "./Navbar";

import Jumbotron from "./Jumbotron";

import Footer from "./Footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div style={{minHeight: "600px"}}>
				<Cards />
				</div>
			</div>
			<Footer />
		</div>
	);
};


export default Home;
