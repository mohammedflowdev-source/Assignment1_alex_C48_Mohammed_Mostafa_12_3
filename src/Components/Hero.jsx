export default function Hero() {
    return <>
        <section className="flex min-h-[500px] flex-col items-center justify-center gap-16 bg-[#0a0a0a]">
            <div className="flex items-center gap-3 rounded-full border border-[#643213] bg-[#25160d] px-2 py-1">
                <div className="h-2 w-2 animate-pulse rounded-full bg-[#f97315]"></div>
                <p className="text-[#f97315]">مدونتنا</p>
            </div>
            <div className="flex flex-col items-center gap-16">
                <h1 className="text-9xl font-bold text-white">استكشف مقالاتنا</h1>
                <p className="text-[20px] leading-[28px] font-normal text-[#a1a1a1]">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
            </div>
        </section>
    </>
}