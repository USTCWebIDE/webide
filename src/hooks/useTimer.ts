import { useEffect, useRef } from "react";

function useTimer(callback: Function, delay: number){
   // const cb = useRef()
   useEffect(()=>{
      var t = setInterval(callback, delay)
      return ()=>clearInterval(t)
   })
}
export default useTimer