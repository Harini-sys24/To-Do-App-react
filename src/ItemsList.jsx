import React from 'react'

import LineItem from './LineItem.jsx';

const ItemsList = ({items, handleCheck, handleTrash}) => {
  return (
     <ul>
          
          {items.map((item)=> (
           <LineItem
              item={item}
              key={item.id}
              handleCheck={handleCheck}
              handleTrash={handleTrash}
            />
          ))}
        </ul>
  )
}

export default ItemsList