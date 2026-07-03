export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-20 grayscale"
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80"
          alt="Luxury hotel"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-emerald text-xs font-black tracking-widest uppercase border border-green-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
            </span>
            Consultoría de Elite
          </div>
          <h1 className="text-7xl md:text-8xl font-black tracking-tight text-[#0B1A26] leading-[0.95]">
            Potenciando el <span className="text-emerald">Talento</span> en Hospitalidad
          </h1>
          <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
            Elevamos la operatividad hotelera a estándares internacionales mediante la formación estratégica de equipos de alto rendimiento.
          </p>
          <div className="flex flex-wrap gap-6 pt-4">
            <a href="#videos">
              <button className="signature-gradient text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:brightness-110 transition-all">
                Explorar Programas
              </button>
            </a>
            <a href="#bio">
              <button className="bg-white border border-gray-200 text-[#0B1A26] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-sm">
                Ver Resultados
              </button>
            </a>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-1000 group">
            <img
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
              alt="Professional housekeeper"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A26]/40 to-transparent" />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl max-w-xs border-l-8 border-emerald hover-lift">
            <p className="text-[#0B1A26] font-bold italic text-lg leading-snug">
              "La excelencia no es un acto, es el hábito que define nuestra hospitalidad."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
