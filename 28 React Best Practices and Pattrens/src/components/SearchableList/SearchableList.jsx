// import { Children, useState } from "react"

// export default function SearchableList({items, children}) {
//     const [searchTerm, setSearchTerm] = useState('')
//     const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))

//     function handleChange(event) {
//         setSearchTerm(event.target.value)
//     }

//     console.log(items)
//     console.log(children)

//     return (
//         <div className="searchable-list">
//             <input type='search' placeholder="Search" onChange={handleChange}/>
//             <ul>
//                {searchResults.length >0 && searchResults.map((item, index) => <li key={index}>{children(item)}</li>)} 
//             </ul>
//         </div>
//     )
// }

import { useState } from 'react';

const timerObj = {}

export default function SearchableList({ items, itemKeyFn, children }) {
  console.log(children)
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    if(timerObj.timer)
        clearTimeout(timerObj.timer)

    timerObj.timer = setTimeout(() => {
        timerObj.timer = null
        setSearchTerm(event.target.value);
    }, 500)
  }

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleChange} />
      <ul>
        {searchResults.map((item) => (
          <li key={itemKeyFn(item)}>
            {children(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}