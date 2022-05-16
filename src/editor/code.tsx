import React from 'react'
import MonacoEditor from "react-monaco-editor"
// import Editor from "@monaco-editor/react";
import './code.css'
// import styled from "@emotion/styled";
interface CodeType{
   selectedFile: File | undefined
}
export const Code = React.forwardRef((props:CodeType, ref: any):any => {
  const selectedFile = props?.selectedFile
  if (!selectedFile)
    return null

  const code = selectedFile.content
  let language = selectedFile.name.split('.').pop()

  if (language === "js" || language === "jsx")
    language = "javascript";
  else if (language === "ts" || language === "tsx")
    language = "typescript"

  return (
    <div className="editor">
      {/* <Editor
        height="100vh"
        language={language}
        value={code}
        theme="vs-dark"
        
      /> */}
      				<MonacoEditor
							ref={ref}
							language={language}
							value={code}
							options={{fontSize: 16}}
							// onChange={this.onChangeHandle}
							// editorDidMount={this.editorDidMountHandle}
                     theme='vs-dark'
						/>
    </div>
  )
})

// const Div = styled.div`
//   width: calc(100% - 250px);
//   margin: 0;
// `
