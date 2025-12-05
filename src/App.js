import "./App.css";
import Header from "./Components/Header";
import Unit from "./Components/Unit";
import { Fragment, useState } from "react";

const App = () => {
  const [imageUrl,setImageUrl] = useState('')
  const [name,setName] = useState('')
  const [city,setCity] = useState('')
  const [position,setPosition] = useState('')
  
  const [myData, setMydata] = useState([]);

  //console.log(myData);

  return(
  <Fragment>
    <Header/>
    
  <div className="main_container">

    
    <div className="main_left">
      <input type="text"value={imageUrl} onChange={(e)=>{
        e.preventDefault()
        setImageUrl(e.target.value)
      }} placeholder="image url"/>
      <input type="text" value={name} onChange={(e)=>{
        e.preventDefault()
        setName(e.target.value)
      }} placeholder="Name"/>
      <input type="text" value={city} onChange={(e)=>{
        e.preventDefault()
        setCity(e.target.value)
      }} placeholder="City"/>
      <input type="text" value={position} onChange={(e)=>{
        e.preventDefault()
        setPosition(e.target.value)
      }} placeholder="Position"/>
      <button onClick={()=> 
      {
        setMydata((pre)=> [
          ...pre,{
            image: imageUrl,
            name,
            city,
            position,
          },
        ]);

        setImageUrl((pre)=>{
          if(pre.length>0) {
            return ''
          } else {
            return pre
          }

        });

        setName((amila)=> (amila.length) > 0 ? "" : amila);
        setCity(preCity=> (preCity.length > 0 ? "" : preCity));
        setPosition((prePosition)=> prePosition.length > 0 ? "" : prePosition);
        
      }        
    }>Submit</button>

    </div>

    <div className="main_right">
      {myData?.map(({image,name,city,position},index)=>(
        <Unit 
          image={image}
          name={name}
          city={city}
          position={position}
          key={index}
      />
      ))}
    </div>
  </div>
  </Fragment>)
}

export default App;