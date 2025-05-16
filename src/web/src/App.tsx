import logo from './assets/logo.svg'

type MyComponentProps = {
  xx: number
}

const fnx = (x: number) => {
  return x
}

const MyComponent = ({ xx }: MyComponentProps) => {
  return <div>{fnx(xx)}</div>
}

const App = () => {
  return (
    <div className="flex justify-center bg-gray-300">
      Hello, world {fnx(1)} <MyComponent xx={5} />
      <img src={logo} className="size-4 cursor-pointer sm:size-4" />
    </div>
  )
}

export default App
