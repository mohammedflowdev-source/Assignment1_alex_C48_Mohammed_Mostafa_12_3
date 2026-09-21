export default function Navbar() {
    return <>
        <header className="bg-[#161616] py-5 sticky top-0 z-50">
            <nav className="mx-auto max-w-7xl px-4">
                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">
                        <img src="https://adasa-psi.vercel.app/assets/logo-GdqARQRt.png" className="w-13" alt="عدسة" />

                        <div>
                            <h1 className="text-xl font-bold text-white">عدسة</h1>
                            <p className="text-sm text-[#d47313]">عالم التصوير الفوتوغرافي</p>
                        </div>
                    </div>


                    <div className="rounded-full border border-[#262626] px-5 py-2.5">
                        <ul className="flex items-center gap-16">
                            <li>
                                <a className="text-[#959595] hover:text-[#d47313]" href=""> الرئيسية </a>
                            </li>

                            <li>
                                <a className="text-[#959595] hover:text-[#d47313]" href=""> المدونة </a>
                            </li>

                            <li>
                                <a className="text-[#959595] hover:text-[#d47313]" href=""> من نحن </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <button className="rounded-full bg-[#ec5b0b] px-5 py-2.5 text-white">ابدأ القراءة</button>
                    </div>
                </div>
            </nav>
        </header>
    </>
}