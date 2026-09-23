export default function Features({ search, setSearch, category, setCategory }) {
    return <>
        <section className="bg-[#0a0a0a] px-4 py-12 text-white">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center justify-between gap-6 ">
                    <div className="relative flex-1">
                        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="search..." className="w-full rounded-xl border border-[#262626] bg-[#121212] py-2.5 pr-10 pl-4 text-sm text-white placeholder-[#666666] focus:border-[#d47313] focus:outline-none" />

                        <svg className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        {['all', 'إضاءة', 'بورتريه', 'مناظر طبيعية', 'تقنيات', 'معدات'].map((cat) => (
                            <button 
                                key={cat}
                                onClick={() => setCategory(cat)} 
                                className={`rounded-lg px-4 py-2 text-sm transition-colors ${
                                    category === cat 
                                        ? 'bg-[#ec5b0b] font-medium text-white' 
                                        : 'border border-[#262626] bg-[#121212] text-[#959595] hover:border-[#ec5b0b] hover:text-white'
                                }`}
                            >
                                {cat === 'all' ? 'جميع المقالات' : cat}
                            </button>
                        ))}
                    </div>


                </div>

                <div className="flex items-center justify-between border-t border-[#1f1f1f] pt-6">
                    <p className="text-sm text-[#808080]">عرض 28 مقالات</p>

                    <div className="flex items-center gap-2 rounded-xl border border-[#262626] bg-[#121212] p-1">
                        <button className="rounded-lg p-2 text-[#808080] hover:text-white">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <button className="rounded-lg bg-[#ec5b0b] p-2 text-white">
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 002-2h2a2 2 0 002 2v2a2 2 0 00-2 2h-2a2 2 0 00-2-2V5zM11 13a2 2 0 002-2h2a2 2 0 002 2v2a2 2 0 00-2 2h-2a2 2 0 00-2-2v-2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    </>
}