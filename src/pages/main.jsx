import { useRef, useState } from "react"
import Draggle from "../component/Draggle/draggle"
import Editor from "../component/editor/editor"
import Left from "../component/left/left"
import { getWindowSize } from '../utils/dom';
import './index.css'
// Editor
function Main() {
   const editorRef = useRef(null)
   const [Screen, setScreen] = useState(WindowSizeCut(getWindowSize()))
   const onDraggle = ()=>{
      // console.log('1');
      // console.log(editorRef.current)
      editorRef.current.editorLayout()
   }
   console.log(Screen);
	return (
      <div id="main-wrapper">
      <Left></Left>
		<Draggle
			containerWidth={Screen[0]}
			containerHeight={Screen[1]}
			min={200}
			max={800}
			initLeftWidth={300}
         onDraggle={onDraggle}
			handler={
				<div
					style={{
						width: 4,
						height: "100%",
						background: "rgb(77, 81, 100)",
					}}
				/>
			}>
			<div
				style={{
					backgroundColor: `#333333`,
					color: `#fff`,
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				files
			</div>
         <Editor ref={editorRef}/>
			{/* <div
				style={{
					backgroundColor: `rgb(116, 140, 253)`,
					color: `#fff`,
					height: Screen[1],
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				
			</div> */}
		</Draggle>
      </div>
	)
}
export default Main
function WindowSizeCut(arr){
   return [arr[0] - 40, arr[1]-40]
}