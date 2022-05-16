import { useEffect, useRef, useState } from "react"
import Draggle from "../component/Draggle/draggle"
import Editor from "../component/editor/editor"
import Left from "../component/left/left"
import { getWindowSize } from "../utils/dom"
import "./index.css"
// Editor
import Sidebar from "../component/sidebar"
import { useFilesFromSandbox } from "../utils"
import { Code } from "../editor/code"
import styled from "@emotion/styled"
// import './App.css';
import { FileTree } from "../component/file-tree"
import { findFileByName } from "../utils/file-manager"
const CURRENT_SANDBOX_ID = "ww9kis"

const dummyDir: Directory = {
	id: "1",
	name: "loading...",
	type: 'dummy',
	parentId: undefined,
	depth: 0,
	dirs: [],
	files: [],
}

function Main() {
	const [rootDir, setRootDir] = useState(dummyDir)
	const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined)
	useFilesFromSandbox(CURRENT_SANDBOX_ID, root => {
		if (!selectedFile) {
			setSelectedFile(findFileByName(root, "index.tsx"))
		}
		setRootDir(root)
	})
	const onSelect = (file: File) => setSelectedFile(file)

	const editorRef = useRef<any>(null)
	const [Screen, setScreen] = useState(WindowSizeCut(getWindowSize()))

	useEffect(() => {
		window.onresize = () => {
			if (!editorRef.current) return
			setScreen(WindowSizeCut(getWindowSize()))
			editorRef.current.editor.layout()
		}
	}, [])
	const onDraggle = () => {
		if (!editorRef.current) return
		console.log(editorRef.current)
		editorRef.current.editor.layout()
	}
	console.log(Screen)

	return (
		<div id="main-wrapper">
			<Sidebar>
				<FileTree rootDir={rootDir} selectedFile={selectedFile} onSelect={onSelect} />
			</Sidebar>
			<Draggle
				containerWidth={Screen[0]}
				containerHeight={Screen[1]}
				min={300}
				max={1200}
				initLeftWidth={600}
				onDraggle={onDraggle}>
				<Code ref={editorRef} selectedFile={selectedFile}/>
				<div className="preview">预览</div>
			</Draggle>
			
		</div>
	)
}
export default Main
function WindowSizeCut(arr: number[]) {
	return [arr[0] - 40 - 200, arr[1] - 40]
}
