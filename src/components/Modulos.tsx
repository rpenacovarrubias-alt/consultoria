const smallCards = [
  { icon: 'sanitizer', title: 'Elementos', desc: 'Uso técnico de químicos y herramientas de vanguardia para sanidad hotelera.' },
  { icon: 'cleaning_services', title: 'Protocolos', desc: 'Limpieza profunda bajo estándares de auditoría internacional.' },
  { icon: 'concierge', title: 'Etiqueta', desc: 'Comunicación asertiva y anticipación a las necesidades del huésped.' },
  { icon: 'sync_alt', title: 'El Ciclo', desc: 'Experiencia 360 del huésped en la propiedad hotelera.' },
]

export default function Modulos() {
  return (
    <section className="py-32 bg-gray-50" id="modulos">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <p className="text-xs font-black tracking-widest text-emerald uppercase mb-4">Especialización Curricular</p>
          <h2 className="text-5xl font-black text-[#0B1A26]">Módulos de Capacitación</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white p-12 rounded-3xl shadow-sm hover-lift border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-4xl text-emerald">king_bed</span>
              </div>
              <h3 className="text-3xl font-black text-[#0B1A26] mb-6">
                Ama de Llaves: Preparación a Limpieza Profunda
              </h3>
              <p className="text-xl text-gray-500 leading-relaxed">
                Gestión estratégica del departamento de pisos, productos químicos, elementos de limpieza, riesgos y protocolos de alto rendimiento bajo estándares de gran turismo.
              </p>
            </div>
            <div className="mt-12">
              <a href="#videos" className="text-emerald font-black text-lg flex items-center gap-3 group">
                Ver videos completos{' '}
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>
          {smallCards.map((card) => (
            <div key={card.title} className="bg-white p-10 rounded-3xl shadow-sm hover-lift border border-gray-100">
              <span className="material-symbols-outlined text-4xl text-emerald mb-6 block">{card.icon}</span>
              <h4 className="text-2xl font-black text-[#0B1A26] mb-4">{card.title}</h4>
              <p className="text-gray-500">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
