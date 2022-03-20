import React from "react"
import "./App.css"
import Editor from './component/editor'
import Example from "./component/example"
function App() {
	return (
		<div className="App">
			<div id="root"></div>
			<Example></Example>
			{/* <Editor></Editor> */}
		</div>
	)
}

export default App
