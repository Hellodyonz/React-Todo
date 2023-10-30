function ChipsFilter(){
    return(
      <div className="chips flex my-4">
            <button className="px-5 py-2 text-white bg-slate-300 rounded mx-1 focus:bg-slate-700">All</button>
            <button className="px-5 py-2 text-white bg-slate-300 rounded mx-1 focus:bg-slate-700">Active</button>
            <button className="px-5 py-2 text-white bg-slate-300 rounded mx-1 focus:bg-slate-700">Complete</button>
    </div>
    )
  }

  export default ChipsFilter