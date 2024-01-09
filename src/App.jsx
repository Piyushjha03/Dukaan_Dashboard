
import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Header } from './components/header/header'
import { Content } from './components/content/content'
function App() {


  return (
    <>
    <div className="payments_cashfree_dashboard">
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="main">
      <Header/>
      <Content/>
      </div>
    </div>
      
    </>
  )
}

export default App
