import { useState } from 'react'

function App() {
  const [prev, setPrev] = useState(1)
  const [curr, setCurr] = useState(0)
  const [fibNumber, setFibNumber] = useState(0)
  const [count, setCount] = useState(0)

  function getNextFibonacci(a: number, b: number): number {
    return a + b
  }

  const handleClick = () => {
    const next = getNextFibonacci(prev, curr)
    setFibNumber(next)
    setPrev(curr)
    setCurr(next)
    setCount(count + 1)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f5f5f5' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '16px', textAlign: 'center', width: '320px' }}>
        <h3>Fibonacci Counter</h3>
        <p>Click ke-{count}</p>
        <h1 style={{ fontSize: '70px', color: '#4F46E5', margin: '10px 0' }}>{fibNumber}</h1>
        <button onClick={handleClick} style={{ padding: '12px 25px', background: '#4F46E5', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          Next Fibonacci
        </button>
      </div>
    </div>
  )
}
export default App