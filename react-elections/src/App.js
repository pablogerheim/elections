import { Home } from "./JSX/Home"
export default function App() {
  return (
    <div>
      <header>
        <div className="bg-blue-100 mx-auto p-4">
          <h1 className="text-center font-semibold text-xl">
            React Elections
          </h1>
        </div>
      </header>

      <main>
        <div className="container mx-auto p-4 flex-row items-center ">
          <h2 className="flex items-center justify-center mb-4">Seleccione Um Municipio</h2>
          <Home/>
        </div>
      </main>
    </div>
  )
}
