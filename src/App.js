import './App.css'
import ReactDOM from "react-dom"
import MainPage from "./Core/Components/MainPage"
import { BrowserRouter } from "react-router-dom"

function App() {
  ReactDOM.render(
        <MainPage />
    ,
    document.getElementById("root")
  )
}
export default App
