import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import './css/app.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
