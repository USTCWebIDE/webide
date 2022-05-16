import React from 'react'
import {buildFileTree} from "./file-manager";

export const useFilesFromSandbox = (id: string, callback: (dir: Directory) => void) => {
  React.useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(({data}) => {
        console.log(data)
        const rootDir = buildFileTree(data);
        callback(rootDir)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
// 'https://codesandbox.io/api/v1/sandboxes/' + id