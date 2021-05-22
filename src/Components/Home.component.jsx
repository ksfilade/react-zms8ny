import React from 'react';
import { menuItems } from '../Data.json'
function Home(props) {
   console.log(menuItems)
   let renderHtml = (data) =>{
    return (
     <ul>
     {
       data.map(el => (
         <div>
         <li>{el.title}</li>
         <li>{el.subElements && renderHtml(el.subElements)}</li>
         </div>
       ))
     }
     </ul>
    )
   }
    return (
        <div className="single_plan">
        <h1>{ menuItems[0].title } </h1>
      
       {renderHtml(menuItems)}
        
  
        </div>
    );
}

export default Home;
