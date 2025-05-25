import React, from "react";

import { useState, useEffect} from "react";

const Home =({ initialValue}) => {
	const [Segundos, setSegundos] = useState(
		initialValue !== undefined ? initialValue : 0

	);

	useEffect(() => {
		const interval= setInterval(() =>{
			setSegundos((counter) => counter + 1);
		}, 500);
	return () => clearInterval(interval);
	}, []);
	return (
		<div className="text-center">
			<h1 className="text-center  ">Contador simple</h1>
			<p>{Segundos}</p>
		</div>
	)
}

export default Home;