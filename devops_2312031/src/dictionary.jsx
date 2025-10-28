import React , {useState}from "react";
const api="https://dictionaryapi.dev/";
function dictionary(){
    const[search,setsearch]=useState();
    const clear=()=>
    {
        setsearch("");
    };
    const handleChange=()=>
    {
        search(onChange=>e.target.value);
    };
    const clearsearch=()=>
    {
        setsearch(" ");
    };
    return 
    (
      <diV>
        <h1>My Dictionary App</h1>
        <input type="text" name="name" onChange={handleChange} placeholder="search">search</input>
        
      </diV>  
    )
}