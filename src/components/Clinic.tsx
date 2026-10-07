import { MapPin, Navigation } from 'lucide-react';

export default function Clinic() {
  return (
    <section className="w-full py-20 bg-[#e4e5e7] scroll-mt-2 md:scroll-mt-3" id="clinica">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 lg:px-20 flex flex-col gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto">
          <h2 className="text-dark-green text-3xl md:text-4xl font-black leading-tight tracking-wider uppercase flex items-center justify-center gap-3">
            <span className="text-dark-green text-2xl md:text-3xl leading-none">•</span>
            Nossa Clínica
            <span className="text-dark-green text-2xl md:text-3xl leading-none">•</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-dark-green/80">
            <MapPin className="text-dark-green shrink-0" size={20} />
            <p className="text-base md:text-lg font-semibold leading-relaxed">
              Alameda dos Ubiatans, 353 - Planalto Paulista, São Paulo - SP, 04070-030
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-[2rem] overflow-hidden h-[450px] w-full bg-cover bg-center border border-border-light shadow-lg" style={{ backgroundImage: "url('/images/foto-clinica.webp')" }}>
          </div>
          <div className="bg-surface-light rounded-[2rem] p-2 border border-border-light h-[450px] shadow-sm overflow-hidden">
            <div className="w-full h-full rounded-3xl bg-slate-200 relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.9723224741366!2d-46.6477033!3d-23.6053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a31a9807579%3A0xcfe0da9da16dfa99!2sAl.+dos+Ubiatans%2C+353+-+Planalto+Paulista%2C+S%C3%A3o+Paulo+-+SP%2C+04070-030!5e0!3m2!1spt-BR!2sbr!4v1!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Oral Sin Planalto Paulista"
              ></iframe>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl border border-border-light flex items-center justify-between shadow-lg z-10">
                <div>
                  <p className="text-text-main font-bold text-sm">Ver no mapa</p>
                  <p className="text-text-muted text-xs">Abrir no Google Maps</p>
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Alameda+dos+Ubiatans%2C+353+-+Planalto+Paulista%2C+S%C3%A3o+Paulo+-+SP%2C+04070-030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-green flex items-center justify-center text-white hover:scale-105 transition-transform cursor-pointer"
                >
                  <Navigation size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
