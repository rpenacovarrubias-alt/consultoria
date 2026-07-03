export default function Nav() {
  return (
    <header className="fixed top-0 w-full z-50 glass-nav border-b border-gray-200/20">
      <nav className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        <div className="text-2xl font-extrabold tracking-tighter text-[#0B1A26]">
          RPC <span className="text-emerald">Consulting</span>
        </div>
        <div className="hidden md:flex gap-10 items-center">
          <a className="font-bold text-emerald border-b-2 border-emerald pb-1" href="#modulos">
            Módulos
          </a>
          <a className="font-semibold text-gray-600 hover:text-emerald transition-colors" href="#videos">
            Videos
          </a>
          <a className="font-semibold text-gray-600 hover:text-emerald transition-colors" href="#bio">
            Biografía
          </a>
          <a href="https://bit.ly/CamaristadeExito" target="_blank" rel="noreferrer">
            <button className="signature-gradient text-white px-7 py-3 rounded-xl font-bold shadow-lg hover:brightness-110">
              Agendar Consulta
            </button>
          </a>
        </div>
      </nav>
    </header>
  )
}
