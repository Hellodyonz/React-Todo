import { useState } from "react";
import Header from "./components/Fragments/Header";
import FormInput from "./components/Fragments/Form-input";
import ChipsFilter from "./components/Fragments/Chips-filter";
import CheckboxContainer from "./components/Fragments/Checkbox-container";

const activityItems = [
  {
    id: 1,
    name: "Membaca Buku",
    checked: true,
  },
  {
    id: 2,
    name: "Makan",
    checked: false,
  },
]

function App() {

  const [items,setItems] = useState(activityItems)

  function handleAddItem(item){
    setItems([...items, item])
  }

  function handleDeleteItem(id){
    setItems((items)=>items.filter((item) => item.id !== id))
  }

  function handleToggleItem(id){
    setItems((items) => items.map((item)=> item.id === id ? 
      {...item, checked: !item.checked}: item))
  }

  function handleEditItem(id){
    alert('maaf kak fitur masih dalam pengembangan, saya masih stuck')
  }

  return (
    <div className="flex justify-center py-12 items-center">
      <div className="">
        <Header/>
        <FormInput onAddItem={handleAddItem}/>
        <ChipsFilter title='ALL'/>
        <ChipsFilter title='Active'/>
        <ChipsFilter title='Completed'/>
        <CheckboxContainer items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onEditItem={handleEditItem}/>
      </div>
    </div>
  )
}

export default App


 

 




  