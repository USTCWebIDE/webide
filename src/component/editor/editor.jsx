import React, { Component } from "react"
import MonacoEditor from "react-monaco-editor"
import "./editor.css"

const defaultCode = `export default {
  name: 'name',
  code: 'code'
}`

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
