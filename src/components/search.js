import React from 'react'
import logo from '../logo.png'

function Search(props) {
    const Searchfun = async (e) =>{
        e.persist()
        console.log(e.target.value)        
        props.cb(true,e.target.value)}
    
    return (
        <div className='search'>
            <img src={logo} alt="" ></img>
            <input type="text" placeholder='Search Bar' onChange={Searchfun} />
        </div>
    )
}

export default Search
