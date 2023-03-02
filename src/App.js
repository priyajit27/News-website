import './App.css';
import React,{useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {Route,Routes} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'


const App =() =>{
  const pageSize = 9;
  const apiKey=process.env.REACT_APP_NEWS_API

const [progress,setProgress]=useState(0)
  // state = {
  //     progress:0
  //     }
    
  //     setProgress = (progress)=>{
  //     setState({progress:progress})
  //     }
  // render() {
    return (
      <div>
        <Navbar/>
        <LoadingBar
         height={3}
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress}  pageSize={pageSize} key="sports" country="in" category="sports"/>}/>
          <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress}  key="business" pageSize={pageSize} country="in" category="business"/>}/>
          <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress}  key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress}  key="science" pageSize={pageSize} country="in" category="science"/>}/>
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress}  key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress}  key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
          <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
      </Routes>
      </div>
    )
  }
// }

export default App