import React from 'react'
import ItemsList from './ItemsList.jsx'


const Content = ({ items, handleCheck, handleTrash }) => {
    
    return(
      <main>
        {(items.length !== 0)? (
          <ItemsList
            items={items}
            handleCheck={handleCheck}
            handleTrash={handleTrash}
          />
        ) : (
        <p>Your List is empty</p>
      )}
      </main>

    )
    
    
    /*function handleButton() {
        console.log("Thanks for subscribing!")
        
    }
    function handleEvent() {
        console.log("Double-clicked!")
    }
    const [name,setName] = useState("Earn")
    function handleNameChange() {
        const names = ["grow","earn","save","give"]
        const ind = Math.floor(Math.random()*4)
        setName(names[ind])
    }
    const [count,setCount] = useState(0)
    function increment() {
        setCount(count=>  count + 1)
        setCount(count=> count + 1)
        setCount(count=>count + 1)
    }
    function decrement() {
        setCount(count=>count - 1)
         setCount(count=>count - 1)
          setCount(count=>count - 1)
    }
  return (
    <main>
    <div>
    <p onDoubleClick={()=> {handleEvent()}}>
      Let's {name} Money!
    </p>
    <button style={{display: 'block', margin: '10px 0' ,marginLeft : '137px'}} onClick={()=> {handleNameChange()}}> Subscribe</button>
     <button style={{display: 'block', margin: '10px 0',marginLeft : '165px'}}onClick={decrement}>-</button>
     <span>{count}</span>
    <button style={{display: 'block', margin: '10px 0',marginLeft : '165px'}} onClick={increment}>+</button>
    </div>

    </main>
  )*/
}

export default Content