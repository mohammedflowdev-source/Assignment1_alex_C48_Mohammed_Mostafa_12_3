export default function index() {
    return <>
        export default function BlogCards({post}) {
    return (
        <div className="flex h-full flex-col overflow-hidden rounded-2xl">

            {/* Image */}
            <div className="relative">
                <img src={post.image} alt="" />

                <span className="absolute top-3 right-3 rounded-full bg-gray-700 px-2 py-2 text-sm">
                    {post.category}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">

                {/* Article information */}
                <div className="space-y-4">

                    <div className="flex items-center gap-2 text-sm">
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>

                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white transition group-hover:text-[#ec5b0b]">
                        {post.title}
                    </h3>

                    {/* Description */}
                    <p className="line-clamp-2 text-sm leading-relaxed text-[#959595]">
                        {post.excerpt}
                    </p>

                </div>

                {/* Footer */}
                <div className="mt-auto flex justify-between border-t border-[#1f1f1f] pt-5">

                    {/* Author */}
                    <div className="flex items-center gap-3">

                        <img
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="h-8 w-8 rounded-full object-cover"
                        />

                        <div>
                            <p className="text-xs font-medium text-white">
                                {post.author.name}
                            </p>

                            <p className="text-[10px] text-[#808080]">
                                {post.author.role}
                            </p>
                        </div>

                    </div>

                    {/* Button */}
                    <button className="rounded-full bg-[#1e1e1e] p-2 text-[#ec5b0b] transition hover:bg-[#ec5b0b] hover:text-white">
                        <svg
                            className="h-4 w-4 rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </button>

                </div>

            </div>

        </div>
        )
}
    </>
}