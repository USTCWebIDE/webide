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
		this.onChangeHandle = this.onChangeHandle.bind(this)
	}
	onChangeHandle(value, e) {
		this.setState({
			code: value,
		})
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
			<div id="wrapper">
            <div id="left"></div>
					<div id="editor">
						<MonacoEditor
							language="javascript"
							value={code}
							options={options}
							onChange={this.onChangeHandle}
							editorDidMount={this.editorDidMountHandle}
						/>
					</div>
					{/* <div className="view" contentEditable={true}>
						{this.state.code}
					</div> */}
			</div>
		)
	}
}

export default Editor
