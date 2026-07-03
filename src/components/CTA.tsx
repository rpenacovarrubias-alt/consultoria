const details = [
  { icon: 'calendar_month', label: '24 Marzo 2026' },
  { icon: 'schedule', label: '9:00 – 15:00 hrs' },
  { icon: 'location_on', label: 'León, Guanajuato' },
  { icon: 'volunteer_activism', label: '¡Gratuito!' },
]

export default function CTA() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-8">
        <div className="cta-gradient rounded-[3rem] p-16 md:p-24 text-center border border-white/10 relative overflow-hidden">
          <div className="relative z-10 space-y-10">
            <p className="text-emerald font-black tracking-widest uppercase text-sm">
              Convocatoria Presencial · Gratuita
            </p>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
              "La Camarista de <span className="text-emerald">Éxito</span>"
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Inscríbete en la edición presencial en{' '}
              <span className="font-bold text-white">León, Guanajuato</span> y eleva los estándares de tu equipo.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-white font-bold text-lg">
              {details.map((d) => (
                <div key={d.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-emerald text-xl">{d.icon}</span>
                  </div>
                  {d.label}
                </div>
              ))}
            </div>
            <a href="https://bit.ly/CamaristadeExito" target="_blank" rel="noreferrer">
              <button className="bg-emerald text-[#0B1A26] text-xl px-14 py-6 rounded-2xl font-black shadow-xl hover:scale-105 hover:bg-white transition-all duration-300">
                Inscribirme Ahora
              </button>
            </a>
            <p className="text-gray-500 text-sm">Cupos limitados · Sueña · Piensa · Crea</p>
          </div>
        </div>
      </div>
    </section>
  )
}
