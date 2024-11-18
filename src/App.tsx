import { ThemeProvider } from "./components/theme-provider"
import { Router } from "./routes/router"

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="nft-theme">
      <Router/>
    </ThemeProvider>
  )
}

export default App
