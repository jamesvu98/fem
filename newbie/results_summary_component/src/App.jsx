import './App.css'
import data from './data.json';
import { ResultsSummaryComponent } from './components/results_summary/results_summary.jsx'

function App() {
  return (
      <ResultsSummaryComponent data_array={data}/>
  ) 
}

export default App
