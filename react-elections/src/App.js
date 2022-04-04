import { Name } from "./JSX"
export default function App() {
  console.log('Teste no console do navegador')

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
          <Name/>
        </div>
      </main>
    </div>
  )
}
