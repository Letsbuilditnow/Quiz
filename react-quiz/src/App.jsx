import React from 'react'
import "./App.css"
import Home from './Home'
import Questions from './Questions'
export default function App() {
const [apiData,setApiData]=React.useState([])

React.useEffect(()=>{

  fetch("https://opentdb.com/api.php?amount=4")
  .then(response =>response.json())
  .then(data=>setApiData(data.results))
},[])
  let arr=[1,2,3,4]
  let questionsElements=[]
  questionsElements = apiData.map(a=>{
   return <Questions question={a.question}/>
   
  }
  ) 

  return (
     <>
     {/* <Home/> */}
     <div className="section-page">
        <div className="section-game">
          <div className="section-game-area">
   {questionsElements}
   
   <button>submit</button>
          </div>
        </div>
      </div>
     </>
  )
}
