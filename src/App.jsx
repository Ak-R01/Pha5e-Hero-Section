import "./App.css"
import Header from "./components/Header"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Hero from "./components/Hero"
function App() {
    return (
        <div class="bg-midnight h-svh">
            <Header></Header>
            <Hero></Hero>
        </div>
    )
}

export default App
