import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(c => c + 1)
  }

  return (<div>
    <button onClick={increaseCount}>Increase {count}</button>
  </div>)
}

export default App
