const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ricardo-pe%C3%B1a-covarrubias-7aa958236' },
  { label: 'Facebook', href: 'https://www.facebook.com/ricardo.pena.450214' },
  { label: 'Curso León', href: 'https://bit.ly/CamaristadeExito' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0B1A26] w-full py-16 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-12 max-w-7xl mx-auto gap-10">
        <div>
          <div className="text-2xl font-black text-white mb-3">
            RPC <span className="text-emerald">Consulting</span>
          </div>
          <p className="text-gray-500 max-w-xs text-sm">
            Liderando la transformación del capital humano en la industria hotelera.
          </p>
        </div>
        <div className="flex gap-8 flex-wrap">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-emerald transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-[10px] font-black uppercase tracking-widest text-gray-600">
          © 2026 Ricardo Peña Covarrubias
        </p>
      </div>
    </footer>
  )
}
