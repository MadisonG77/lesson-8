import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



 

function App() { 

 const [searchTerm, setSearchTerm] = useState(''); 

 

 const handleSearch = (event) => { 

   // Update the searchTerm state here 
setSearchTerm(event.target.value);
    

 
 }; 

 const items =['Apple', 'Pear','Grapes'];
 const filteredItems = items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase())
);

 return ( 

   <div> 

     <h1>Search App</h1> 

     <Search searchTerm={searchTerm} onSearch={handleSearch} /> 

     <p>Searching for: {searchTerm}</p> 

<ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        </ul>
   </div> 

 ); 
 
} 

 

function Search(props) { 

 return ( 

   <div> 

     <label htmlFor="search">Search: </label> 

     <input 

       id="search" 

       type="text" 

       value={props.searchTerm}
       onChange={props.onSearch}

       // Add value and onChange here 



     /> 

   </div> 

 ); 

} 

 

export default App; 