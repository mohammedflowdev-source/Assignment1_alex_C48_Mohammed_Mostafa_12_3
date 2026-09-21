import { useState } from "react"
import Blog from "./Components/Blog"
import Features from "./Components/Features"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"

export default function App() {
  const [search, setSearch] = useState("")


  return <>
    <Navbar />
    <Hero />
    <Features search={search} setSearch={setSearch} />
    <Blog search={search} />


  </>
}