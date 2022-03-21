import React, { useState } from "react"
import "./App.css"
import Draggle from "./component/Draggle/draggle"
import Editor from "./component/editor/editor"
import Example from "./component/example"

import Nav from "./component/nav/nav"
import useTimer from "./hooks/useTimer"
import Main from "./pages/main"

function App() {
	return (
		<div className="App">
			{/* <div id="root"></div> */}
			<Nav></Nav>
			
			<Main/>

			{/* </div> */}
		</div>
	)
}
function Timer() {
	const [num, setNum] = useState<number>(0)
	useTimer(() => {
		setNum(num + 1)
	}, 1000)
	return <div>{num}</div>
}
export default App
