import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from "./components/NavBar/Navbar";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Feature from "./components/Feature/Feature";
import Feature2 from "./components/Feature/Feature2";
import Parallex from "./components/parallex/parallex";
import Food from "./components/foodSection/food";
import Testimonials from "./components/testimonials/test";
import Question from "./components/question/question";
import Parallex2 from "./components/Parallex-2/parallex-2";
import Subscribe from "./components/subscribe/subscribe";
import Footer from "./components/footer/footer";

function App() {
  const [info , setInfo] = useState([]);
  const [foods , setFood] = useState([]);
  const [test , setTest] = useState([]);
  const [question, setQuestion] = useState([]);
  useEffect(() =>
  {
    fetch('/js/data.json').then(data => data.json()).then(data =>
    {
      setInfo(data.info);
      setFood(data.foods);
      setTest(data.testimonials);
      setQuestion(data.question);
    })
  },[])

  return (
    <>
      <NavBar />
      <Header />
      <Info info={info} />
      <Feature />
      <Feature2 />
      <Parallex />
      <Food foods={foods} />
      <Testimonials test={test} />
      <Question question={question} />
      <Parallex2 />
      <Subscribe/>
      <Footer/>
    </>
  );
}

export default App;














// class App extends React.Component
// {
  
//   state = {
//     greeting: (name) =>{
//       console.log(`hallo${name}`)
//     }
//   } 
//   render()
//   {
//     return (
//       <div className="App">
//         {this.state.greeting("omar")}
//       </div>
//     );
//   }
// }
