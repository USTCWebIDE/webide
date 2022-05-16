import React, { useEffect, useLayoutEffect, useState } from "react"
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
			<Nav></Nav>
			<Main />
		</div>
	)
}

export default App

function Timer() {
	const [num, setNum] = useState<number>(0)
	const { mode, Pause, Continue } = useTimer(() => {
		setNum(num + 1)
	}, 1000)
	const ChangeFunc = () => {}
	return (
		<>
			<div className="timer">{num}</div>
			<button onClick={() => ChangeFunc()}>改变函数</button>
			<button onClick={() => Pause()}>暂停</button>
			<button onClick={() => Continue()}>继续</button>
			<button>改变时间</button>
		</>
	)
}
