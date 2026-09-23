import { useState } from "react";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import Blog from "../Components/Blog";

export default function Home() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");

    return (
        <>
            <Hero />
            <Features search={search} setSearch={setSearch} category={category} setCategory={setCategory} />
            <Blog search={search} category={category} />
        </>
    );
}
