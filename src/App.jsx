import { useState,useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import apiRequest from './apiRequest.jsx'

import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';
import AddItem from './AddItem.jsx';
import SearchItem from './SearchItem.jsx';

function App() {
  const API_URL = "http://localhost:3500/items"
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL)
        if(!response.ok) throw Error("Data not received")
        const listItems = await response.json()
        setItems(listItems)
        setFetchError(null)
      }
      catch(err) {
        setFetchError(err.message)
      }
      finally {
        setIsLoading(false)
      }
    }
    setTimeout(()=> {
      fetchItems()
      setIsLoading(true)
    },2000)
    
  }, []);
    
    const handleCheck = async (id) => {
  
        const List = items.map((item)=> item.id === id ? { ...item ,checked:!item.checked} : item)
        setItems(List)
        const myItem = List.filter((item) =>item.id === id)
        const updateOptions = {
        method:'PATCH',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify( {checked:myItem[0].checked})
      }
      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl,updateOptions) 
      if(result) setFetchError(result)
    }
    const handleTrash = async (id) => {
        const List1 = items.filter((item) => item.id!==id)
        setItems(List1)
        const deleteOptions = {method:'DELETE'}
        const reqUrl = `${API_URL}/${id}`
        const result = await apiRequest(reqUrl,deleteOptions) 
        if(result) setFetchError(result)
      }
    
    const [newItem,setNewItem] = useState("")
    const addItem = async(item) => {
      //const id = items.length ? items[items.length-1].id + 1:1
      const newAddItem = {checked:false,item}
      const ListItems = [...items,newAddItem]
      setItems(ListItems)
      const postOptions = {
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(newAddItem)
      }
      const result = await apiRequest(API_URL,postOptions) 
      if(result) setFetchError(result)
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
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{color:"red"}}>{`Error: ${fetchError}`}</p>}
    
        {!isLoading && !fetchError && (
          <Content 
            items={items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
            handleCheck={handleCheck}
            handleTrash={handleTrash}
          />
        )}
        
        </main>
      <Footer 
        length = {items.length}/>

    </div>
  );
}
  
export default App;
