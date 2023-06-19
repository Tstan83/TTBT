import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar'
import Exploder from './components/exploder'

function App (){
return (
<>
  <Exploder />
  <Navbar />
</>
)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//dsadsa