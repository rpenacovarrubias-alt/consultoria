const credentials = [
  {
    icon: 'verified_user',
    title: 'Consultor Independiente',
    desc: 'Especializado en Operaciones de Hospitalidad y Turismo.',
  },
  {
    icon: 'history',
    title: 'Facilitador Certificado',
    desc: 'Normas Técnicas EC03201 · NUTUR006.01.',
  },
  {
    icon: 'award_star',
    title: 'Certificación NUTUR006.01',
    desc: 'Experto en Preparación de Habitaciones y Alojamiento.',
  },
  {
    icon: 'school',
    title: 'Fundador',
    desc: 'Programa "La Camarista de Éxito" — León, Gto. 2026',
  },
]

export default function Bio() {
  return (
    <section className="py-32 bg-[#0B1A26] text-white relative overflow-hidden" id="bio">
      <div className="max-w-7xl mx-auto px-8 relative z-10 grid md:grid-cols-12 gap-16 items-center">
        <div className="md:col-span-5">
          <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border-2 border-white/10 group">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              src="https://raw.githubusercontent.com/rpenacovarrubias-alt/consultoria/main/image/ricardo-pena.png"
              alt="Ricardo Peña Covarrubias"
            />
          </div>
        </div>
        <div className="md:col-span-7 space-y-10">
          <div>
            <p className="text-xs font-black tracking-widest text-emerald uppercase mb-4">Trayectoria de Éxito</p>
            <h2 className="text-6xl font-black tracking-tight mb-6">
              Ricardo Peña <br />
              <span className="text-emerald/80">Covarrubias</span>
            </h2>
            <div className="h-1.5 w-24 bg-emerald rounded-full" />
          </div>
          <blockquote className="text-xl font-light italic text-white/80 leading-relaxed border-l-4 border-emerald pl-8">
            "Mi misión es dignificar el trabajo operativo, transformando cada tarea rutinaria en un acto consciente de hospitalidad genuina y excelencia profesional."
          </blockquote>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {credentials.map((c) => (
              <div key={c.title} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-emerald">{c.icon}</span>
                </div>
                <div>
                  <h4 className="font-black text-white text-lg">{c.title}</h4>
                  <p className="text-gray-400 text-sm">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
