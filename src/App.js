import BarChart from './Components/BarChart'
import { data } from './utils/data.json'

function App() {
  return (
    <section>
      <BarChart data={data} />
    </section>
  )
}

export default App
