import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='my-8 mx-8'>
      <button
        className='btn bg-blue-500 hover:bg-blue-300 font-bold py-2 px-4 rounded'
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </div>
  )
}

export default App
