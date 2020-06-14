import React, {useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'

/* **********************  Importing Components ******************* */
import Card from './components/card'
import Search from './components/search'
import Info from './components/Info'


/* **********************  Importing Components  (end) ******************* */


function App() {
  useEffect(() => {
    fetchHeros();
  },[])
  const [isSearch,setisSearch] = useState(false);
  const [isInfo,setisInfo] = useState(0);
  const [input,setinput] = useState('');
  const [heros, setheros] = useState([]);
  const fetchHeros = async () => {
      const data = await fetch("https://akabab.github.io/superhero-api/api/all.json");
      const heros = await data.json();
      setheros(heros)
    }
  const update = (crbool,input) => {
    setisSearch(crbool)
    setinput(input)
  }
  const updateinfo = () => {
    setisInfo(isInfo+1)
  }
 

  
  
  if(isInfo=== 0){
 
  
  if(!isSearch){
  return (
  
    <div className="app">
         
      <Search cb={update} />
      <Router>
      {heros.map(hero =>{
     return (<Link to={`/info/${hero.id}`} onClick={updateinfo} ><Card id={hero.id} /></Link>)
     
   

  })}</Router>

   
      
    </div>

  );}
  if(isSearch){
    const herofils = heros.filter( hero => {
      let heroname = String(hero.name).toUpperCase()
      return heroname.indexOf(input.toUpperCase()) > -1 
    })
    return (
    
      <div className="app">
        <Search cb={update} />
        <Router>
        {herofils.map(hero =>(
        <Link to={`/info/${hero.id}`} onClick={updateinfo} ><Card id={hero.id} /></Link>
  
        ))}</Router>
     
        
      </div>
    );
  }
}
if(isInfo === 1){
  console.log(isInfo)
  return (
    <Router>
    <Switch>
    <Route path='/info/:id' render={(props) => <Info {...props} cps={updateinfo} />} />
    </Switch>
     </Router>
  )
}



}

export default App;
