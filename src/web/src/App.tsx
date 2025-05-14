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
    <div className="bg-gray-300 flex justify-center">
      Hello, world {fnx(1)} <MyComponent xx={5} />
      <img src={logo} className="size-4 sm:size-4 cursor-pointer" />
    </div>
  )
}

export default App
