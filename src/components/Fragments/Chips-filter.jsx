function ChipsFilter({title, onCLick}){
        return(
          
                <button onClick={onCLick} className="px-5 py-2 text-white bg-slate-300 rounded mx-1 focus:bg-slate-700">{title}</button>
          
        )
      }
      
  export default ChipsFilter