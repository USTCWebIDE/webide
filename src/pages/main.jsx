import { useEffect, useRef, useState } from "react"
import Draggle from "../component/Draggle/draggle"
import Editor from "../component/editor/editor"
import Left from "../component/left/left"
import { getWindowSize } from '../utils/dom';
import './index.css'
// Editor
function Main() {
   const editorRef = useRef(null)
   const [Screen, setScreen] = useState(WindowSizeCut(getWindowSize()))
   useEffect(()=>{
      window.onresize = ()=>{
         setScreen(WindowSizeCut(getWindowSize()))
         editorRef.current.editorLayout()
      }
   },[])
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
         onDraggle={onDraggle}>
			<div class="files">
            files<br></br>devs
         </div>
         <Editor ref={editorRef}/>
		</Draggle>
      <div class="files2 files">preview</div>
      </div>
	)
}
export default Main
function WindowSizeCut(arr){
   return [arr[0] - 40 - 300, arr[1]-40]
}

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