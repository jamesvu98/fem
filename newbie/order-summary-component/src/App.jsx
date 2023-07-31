import './App.css'
import backgroundMobile from './assets/images/pattern-background-mobile.svg'
import { OrderSummary } from './components/order-summary/component'

function App() {

  return (
    <div style={{
      backgroundImage: `url(${backgroundMobile})`,
      height: '100vh',
      backgroundSize: 'cover'
    }}>
      <OrderSummary />
    </div>
  )
}

export default App
