import { ThemeProvider } from "./components/theme-provider"

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="nft-theme">
      <h1 className=""> Titulo</h1>
    </ThemeProvider>
  )
}

export default App
