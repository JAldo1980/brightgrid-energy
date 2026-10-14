export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#F4F5F0]/90 backdrop-blur-md border-b border-[#123D32]/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-black text-[#123D32] tracking-tight">
            BrightGrid<span className="text-[#16845B]">.</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#172A23]">
          <a href="#problem" className="hover:text-[#16845B] transition">
            The Problem
          </a>
          <a href="#solution" className="hover:text-[#16845B] transition">
            Solutions
          </a>
          <a href="#assessment" className="hover:text-[#16845B] transition">
            Assessment
          </a>
        </nav>
        <div>
          <a
            href="#assessment"
            className="bg-[#16845B] hover:bg-[#123D32] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition shadow-md shadow-[#16845B]/20"
          >
            Request Assessment
          </a>
        </div>
      </div>
    </header>
  );
}
