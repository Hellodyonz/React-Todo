import { useState } from "react"

function FormInput(){

  const [name, setName] = useState("");

  function getInput(event){
    setName(event.target.value)
  }


  function handleSubmit(){
     if(name === ''){return alert('Input Tidak boleh kosong')}

     const newActivity = {name: name, checked: false, id:Date.now()}
     alert(name) // yang mau saya oper adalah name hasil input ke 
     setName('')
  }


    return(
      <div className="flex">
          <input className="text-sm-2 border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50" 
          type="text" placeholder="Isi kegiatanmu" value={name} onChange={getInput}/>
          <button onClick={handleSubmit} className="bg-blue-600 py-2 px-5 rounded text-white mx-1">Add</button>
      </div>
    )
  }

  export default FormInput