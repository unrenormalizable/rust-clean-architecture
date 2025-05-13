var fnx = (x) => {
  return x
}

const MyComponent = ({ xx }) => {
  return <div>{fnx(xx)}</div>
}

const App = () => {
  return (
    <div className="flex justify-center bg-gray-300">
      Hello, world {fnx(1)} <MyComponent xx={5} />
    </div>
  )
}

export default App
