export default function Pagination({ pages, currentPage, setCurrentPage }) {
    const generatedPages = [];
    for (let i = 1; i <= pages; i++) {
        generatedPages.push(i)
    }
    return <>
        <div className="mx-auto mt-10 max-w-7xl">
            <div className="flex items-center justify-center gap-2">
                {generatedPages.map((page) => (
                    <button
                        onClick={() => setCurrentPage(page)}
                        key={page}
                        className={`h-10 w-10 rounded-lg ${currentPage === page
                                ? "bg-[#ec5b0b] text-white"
                                : "bg-[#121212] text-[#808080] hover:text-white"
                            }`}
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    </>
}