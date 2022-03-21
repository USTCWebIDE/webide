
const createUseLocal = (key: string) => {
   return <T>(initialState: T) => {
     const [state, setState] = React.useState(() => {
       try {
         const item = localStorage.getItem(key);
         if (item === null) return initialState;
         return JSON.parse(item);
       } catch (e) {
         return initialState;
       }
     });
     React.useEffect(() => {
       localStorage.setItem(key, JSON.stringify(state));
     }, [state]);
 
     return [state, setState];
   };
 };