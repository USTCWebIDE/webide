import React, { Component } from "react"
import MonacoEditor from "react-monaco-editor"
import "./editor.css"

const defaultCode = `function wait(time){
   return new Promise((resolve)=>{
      setTimeout(()=>{
         resolve(time)
      }, time)
   })
}
class mPromise{
   constructor(executor){
      this.status = 0;
      this.callback = [];
      this.value = undefined;
      executor(this._resolve.bind(this));
   }
   _resolve(value){
      this.value = value;
      this.callback.forEach(({onFulfilled, resolve})=>{
         var res = typeof onFulfilled === 'function' && onFulfilled(value);
         if(res instanceof mPromise){
            res.then(resolve)
         }
      })
   }
   then(onFulfilled){
      return new Promise((resolve)=>{
         this.callback.push({onFulfilled, resolve})
      })
   }
}
wait(100)
.then((t)=>{
   console.log(t);
   return wait(1000);
})
.then((t)=>{
   console.log(t);
   return wait(1000);
})
.then((t)=>{
   console.log(t);
   return wait(1000);
})
.then((t)=>{
   console.log(t);
   return wait(1000);
})`

class Editor extends Component {
	constructor(props) {
		super(props)
		this.state = {
			code: defaultCode,
		}
		this.monacoRef = React.createRef()
		this.editorLayout = this.editorLayout.bind(this)
		this.onChangeHandle = this.onChangeHandle.bind(this)
	}
	onChangeHandle(value, e) {
		this.setState({
			code: value,
		})
	}
	editorLayout(){
		console.log(this.monacoRef.current)
		this.monacoRef.current.editor.layout()
	}
	editorDidMountHandle(editor, monaco) {
		console.log("editorDidMount", editor)
		editor.focus()
	}
	render() {
		const code = this.state.code
		const options = {
			selectOnLineNumbers: true,
			renderSideBySide: false,
		}
		return (
			<div id="editor">
						<MonacoEditor
							ref={this.monacoRef}
							language="javascript"
							value={code}
							options={options}
							onChange={this.onChangeHandle}
							editorDidMount={this.editorDidMountHandle}
                     theme='vs-dark'
						/>
					</div>
		)
	}
}

export default Editor
