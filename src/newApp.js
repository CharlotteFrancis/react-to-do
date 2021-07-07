import { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    console.log('hi')
    // dan do axios.get statement here
  }, [])
  return (
    <h1>Hello, World!</h1>
  )
}

export default App