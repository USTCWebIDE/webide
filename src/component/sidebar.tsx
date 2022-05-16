import React, {ReactNode} from 'react';
import './sidebar.css'
export const Sidebar = ({children}: { children: ReactNode }) => {
  return (
    <aside>
      {children}
    </aside>
  )
}


export default Sidebar
