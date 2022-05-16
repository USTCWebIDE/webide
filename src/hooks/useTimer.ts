import { useEffect, useRef, useState } from "react";

function useTimer(callback: Function, delay: number){
   const [mode, setMode] = useState<number>(0);
   // const cb = useRef()
   useEffect(()=>{
      var t = setInterval(()=>{
         callback()
         
      }, delay)
      return ()=>clearInterval(t)
   })
   useEffect(()=>{
      if(mode === 1){

      }
      if(mode === 0){

      }
   }, [mode]);
   return {
      mode,
      Pause:function(){
         setMode(1)
      },
      Continue:function(){
         setMode(0)
      },
   }
}
export default useTimer