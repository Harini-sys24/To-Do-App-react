import React from 'react'

const Footer = ({ length }) => {
    const year = new Date()

  return (
    <footer>
        <p> 
          {length} List {length ===1 ?"item": "items" }
        </p>
        
    </footer>
  )
}
/*
<p> 
  Copyright &copy; {year.getFullYear()}
</p>
*/
export default Footer