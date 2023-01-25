import React from 'react'
import "./App.css"
import Home from './Home'
import Questions from './Questions'
export default function App() {
  let arr=[1,2,3,4]
  let questionsElements=[]
  questionsElements = arr.map(a=>{
   return <Questions/>
   
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
