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
  const [filterableitems, setFilterableitems] = useState(activityItems)

  function handleAddItem(item){
    setItems([...items, item])
    setFilterableitems([...filterableitems, item])
  }

  function handleDeleteItem(id){
    setItems((items)=>items.filter((item) => item.id !== id))
    setFilterableitems((items)=>items.filter((item) => item.id !== id))
  }

  function handleToggleItem(id){
    setItems((items) => items.map((item)=> item.id === id ? 
      {...item, checked: !item.checked}: item))
    setFilterableitems((items) => items.map((item)=> item.id === id ? 
      {...item, checked: !item.checked}: item))
  }

  function handleShowActive(){
    console.log('active')
    setItems(filterableitems)
    setItems(filterableitems.filter(item => item.checked === false))
  }

  function handleShowCompleted(){
    setItems(filterableitems)
    setItems(filterableitems.filter(item => item.checked === true))
  }

  function handleShowAll(){
    setItems(filterableitems)
    console.log('All')
  }

  function handleEditItem(id){
    alert('maaf kak fitur masih dalam pengembangan, saya masih stuck')
  }

  return (
    <div className="flex justify-center py-12 items-center">
      <div className="">
        <Header/>
        <FormInput onAddItem={handleAddItem}/>
        <ChipsFilter onCLick={handleShowAll} title='ALL'/>
        <ChipsFilter onCLick={handleShowActive} title='Active'/>
        <ChipsFilter onCLick={handleShowCompleted} title='Completed'/>
        <CheckboxContainer items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onEditItem={handleEditItem}/>
      </div>
    </div>
  )
}

export default App


 

 




  