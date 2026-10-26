import { useState,useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'



import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import AddItem from './AddItem.jsx';
import SearchItem from './SearchItem.jsx';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("to-do-list"));
    if (savedItems) {
      setItems(savedItems);
    }
  }, []);
    
    const handleCheck = (id) => {
  
        const List = items.map((item)=> item.id === id ? { ...item ,checked:!item.checked} : item)
        setItems(List)
        localStorage.setItem("to-do-list",JSON.stringify(List))
      }
    const handleTrash = (id) => {
        const List1 = items.filter((item) => item.id!==id)
        setItems(List1)
        localStorage.setItem("to-do-list",JSON.stringify(List1))
      }
    
    const [newItem,setNewItem] = useState("")
    const addItem = (item) => {
      const id = items.length ? items[items.length-1].id + 1:1
      const newAddItem = {id,checked:false,item}
      const ListItems = [...items,newAddItem]
      setItems(ListItems)
      localStorage.setItem("to-do-list",JSON.stringify(ListItems))
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      if(!newItem) return
      addItem(newItem)
      setNewItem("")
    }

    const [search,setSearch] = useState('')

    
  return (
    <div>
      <Header title="To Do List"/>
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <main>
      <Content 
        items={items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleTrash={handleTrash}
      />
      
      </main>
      <Footer 
        length = {items.length}/>

    </div>
  );
}
  
export default App;
