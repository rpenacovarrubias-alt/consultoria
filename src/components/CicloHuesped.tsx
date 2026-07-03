const stages = [
  { icon: 'event_available', label: 'Pre-Arribo', desc: 'Expectativas y reserva inicial.', featured: false },
  { icon: 'luggage', label: 'Llegada', desc: 'La crucial primera impresión.', featured: false },
  { icon: 'meeting_room', label: 'Estancia', desc: 'El corazón del servicio operativo.', featured: true },
  { icon: 'key', label: 'Salida', desc: 'Cierre y facturación impecable.', featured: false },
  { icon: 'reviews', label: 'Post-Salida', desc: 'Fidelización y comentarios.', featured: false },
]

export default function CicloHuesped() {
  return (
    <section className="py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <p className="text-xs font-black tracking-widest text-emerald uppercase mb-4">
            Ecosistema de Experiencia
          </p>
          <h2 className="text-5xl font-black text-[#0B1A26]">El Ciclo Vital del Huésped</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
          {stages.map((stage) =>
            stage.featured ? (
              <div key={stage.label} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-3xl signature-gradient shadow-2xl flex items-center justify-center mb-8 -mt-4">
                  <span className="material-symbols-outlined text-white text-4xl">{stage.icon}</span>
                </div>
                <h5 className="text-xl font-black text-[#0B1A26] mb-3">{stage.label}</h5>
                <p className="text-sm text-gray-500">{stage.desc}</p>
              </div>
            ) : (
              <div key={stage.label} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center mb-8 group-hover:bg-emerald group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl">{stage.icon}</span>
                </div>
                <h5 className="text-xl font-black text-[#0B1A26] mb-3">{stage.label}</h5>
                <p className="text-sm text-gray-500">{stage.desc}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
