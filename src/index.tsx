import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.scss";
import "./assets/css/icon.css";
// import reportWebVitals from './reportWebVitals';

import RootComponent from "./components/Root/Root.component";

ReactDOM.render(
	<React.StrictMode>
		<RootComponent />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
