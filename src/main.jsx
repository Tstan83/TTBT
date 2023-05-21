import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar'
import Main from './components/main'
import Exploder from './components/exploder'

function App (){
return (
<>
  <Exploder />
  <Navbar />
  <Main />
<h1>Hello</h1>
<p>This is a self destructing webpage!!!</p>
</>
)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//dsadsa