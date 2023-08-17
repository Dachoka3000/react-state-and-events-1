import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//button=document.getElementById("button")
//button.addEventListener("click", ()=>{console.log('hi')})

//let name = "Daisy"
//name = "Machoka"
// const p = document.getElementById("p")
//p.innerText = name

function App() {

  function sayHi(){
    console.log("Hi")
  }

  function printName(event){
    event.preventDefault()
    console.log(event.target.value)
  }

  function squareNumber(event){
    event.preventDefault()
    let number = (event.target.value)
    let square = (parseInt(number))*(parseInt(number))
    console.log(square)
  }

  // let age = 190
  // function addAge(){
  //   age=age+1
  //   console.log(age)
  // }
  const [age, setAge]=useState(190)

  //setAge(age+1)
  function addAge(){
    setAge(age+1)
  }

  const [name, setName]=useState("")

  function addName(event){
    event.preventDefault()
    setName(event.target.value)
    
  }

  const [course,setCourse]=useState("")

  function addCourse(event){
    event.preventDefault()
    setCourse(event.target.value)
  }

  const [hobby,setHobby]=useState("")

  function addHobby(event){
    event.preventDefault()
    setHobby(event.target.value)
  }
console.log(name,hobby,course)
  function submitStudent(event){
    event.preventDefault()
    let student = {
      myName: name,
      myCourse:course,
      myHobby:hobby
    }

    console.log(student)
  }
  

  return (
    <div className="App">

        {/* <p>Your age is {age}</p>
        <button onClick={addAge}>Add Age</button>
        <input placeholder='Enter your name' onChange={addName}/>
        <h3>Hello {name}</h3> */}
        <form onSubmit={submitStudent}>
        <input placeholder='Enter your name' onChange={addName}/>
        <input placeholder='Enter your course' onChange={addCourse}/>
        <input placeholder='Enter your hobby' onChange={addHobby} />
        <button>Submit</button>


        </form>
    </div>
  );
}

export default App;
