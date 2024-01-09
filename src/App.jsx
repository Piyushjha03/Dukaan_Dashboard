
import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Header } from './components/header/header'
import { Payments } from './pages/payments'
import {  Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { FourOfour } from './pages/fourOfour'
function App() {


  return (
    <>
    
    <div className="payments_cashfree_dashboard">
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="main">
      <Header/>
      <Routes>

      <Route exact path='/' element={<Navigate to="/payments" />} />
      <Route path='/home' element={<FourOfour/> }/>
      <Route path='/orders' element={<FourOfour/>}/>
      <Route path='/products'element={<FourOfour/>}/>
      <Route path='/delivery'element={<FourOfour/>}/>
      <Route path='/marketing'element={<FourOfour/>}/>
      <Route path='/analytics'element={<FourOfour/>}/>
      <Route path='/payments' element={<Payments />}/>
      <Route path='/tools'element={<FourOfour/>}/>
      <Route path='/discounts'element={<FourOfour/>}/>
      <Route path='/audience'element={<FourOfour/>}/>
      <Route path='/appearances'element={<FourOfour/>}/>
      <Route path='/plugins'element={<FourOfour/>}/>
    </Routes>
      </div>
    </div>
    
    </>
  )
}

export default App
