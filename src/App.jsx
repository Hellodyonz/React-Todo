import { useState } from "react"
import CheckboxContainer from "./components/Fragments/Checkbox-container"
import ChipsFilter from "./components/Fragments/Chips-filter"
import FormInput from "./components/Fragments/Form-input"
import Header from "./components/Fragments/Header"

function App() {

  const [item,setItem] = useState()
  

  return (
    <div className="flex justify-center py-12 items-center">
      <div className="">
        <Header/>
        <FormInput/>
        <ChipsFilter/>
        <CheckboxContainer/>
      </div>
    </div>
  )
}

export default App
