import BlogCards from "./BlogCards";
import data from '../data.json'
import Pagination from "./Pagination";
import { useState } from "react";

export default function Blog({ search }) {
    const [currentPage, setCurrentPage] = useState(1)
    const postPerPage = 6;
    const filteredPosts = data.posts.filter(post =>
        post.title.toLowerCase().includes(search.toLowerCase())
    )
    const pages = Math.ceil(filteredPosts.length / postPerPage);
    const startIndex = (currentPage - 1) * postPerPage;
    const finishIndex = currentPage * postPerPage;
    const orderedPosts = filteredPosts.slice(startIndex, finishIndex)






    return (
        <>

            <section className="bg-[#0a0a0a] px-4 py-12 text-white">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {orderedPosts.map((post) => (
                            <BlogCards key={post.id} post={post} />
                        ))}
                    </div>
                </div>
                <Pagination pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </section>

        </>
    );
}