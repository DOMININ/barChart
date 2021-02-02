import BarChart from './Components/BarChart/BarChart'
import { data } from './utils/data.json'

const barNumbers = [...data.map((element) => element.qty)]

function App() {
  return (
    <section>
      <BarChart numbers={barNumbers} />
    </section>
  )
}

export default App
