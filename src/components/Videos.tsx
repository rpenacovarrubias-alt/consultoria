const VIMEO_PARAMS = 'title=0&byline=0&portrait=0&color=059669'

const sections = [
  {
    title: 'Elementos de Limpieza',
    videos: [
      { id: '387082977', label: '1. Productos Químicos' },
      { id: '387083064', label: '2. Riesgos del Manejo' },
      { id: '387082909', label: '3. Herramientas de Limpieza' },
      { id: '387082848', label: '4. Código de Color' },
      { id: '387083110', label: '5. Sarro' },
      { id: '558033108', label: '6. Pisos y Alfombras' },
    ],
  },
  {
    title: 'Limpieza de Habitación',
    videos: [
      { id: '1113415397', label: '1. Carrito de Camarista' },
      { id: '1113415368', label: '2. Status de Habitaciones' },
      { id: '1113415313', label: '3. Preparación de Habitación' },
      { id: '1113415349', label: '4. Limpieza de Habitación' },
      { id: '386753979', label: '5. Limpieza de Baño' },
      { id: '386754083', label: '6. Presentación de la Habitación' },
      { id: '386754181', label: '7. Blancos y Amenidades' },
    ],
  },
  {
    title: 'Las 6 Perlas del Servicio',
    videos: [
      { id: '684494134', label: 'Bienvenida al Servicio' },
      { id: '684479166', label: '1. Pasión' },
      { id: '684490905', label: '2. Compromiso' },
      { id: '684396613', label: '3. Desenganche' },
      { id: '684531173', label: '4. Trato Humano' },
      { id: '684473030', label: '5. Inspiración' },
      { id: '684631028', label: '6. Servicio con Amor' },
    ],
  },
]

export default function Videos() {
  return (
    <section className="py-32 bg-white" id="videos">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-24">
          <p className="text-xs font-black tracking-widest text-emerald uppercase mb-4">Contenido Premium</p>
          <h2 className="text-5xl font-black text-[#0B1A26] mb-6">Biblioteca de Capacitación</h2>
          <p className="text-xl text-gray-500">
            Domina las técnicas más avanzadas del sector con nuestra videoteca de acceso libre.
          </p>
        </div>
        <div className="space-y-24">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-3xl font-black text-[#0B1A26] mb-12 flex items-center gap-4">
                <span className="w-12 h-1 bg-emerald rounded-full" />
                {section.title}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {section.videos.map((v) => (
                  <div key={v.id} className="hover-lift overflow-hidden rounded-3xl premium-shadow">
                    <iframe
                      allowFullScreen
                      className="w-full aspect-video"
                      src={`https://player.vimeo.com/video/${v.id}?${VIMEO_PARAMS}`}
                      title={v.label}
                    />
                    <div className="p-4 bg-white">
                      <p className="font-bold text-[#0B1A26]">{v.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
