import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin } from 'lucide-react'
import { Map, MapMarker, MarkerContent, MapControls, MarkerTooltip, type MapRef } from '../components/ui/mapcn-map'

gsap.registerPlugin(ScrollTrigger)

const coverageAreasWithCoords = [
  { name: 'القاهرة الكبرى', coordinates: [31.2357, 30.0444] as [number, number] },
  { name: 'الجيزة بالكامل', coordinates: [31.2089, 30.0131] as [number, number] },
  { name: 'الإسكندرية والساحل', coordinates: [29.9187, 31.2001] as [number, number] },
  { name: 'العاشر من رمضان', coordinates: [31.7420, 30.3015] as [number, number] },
  { name: 'السادس من أكتوبر', coordinates: [30.9167, 29.9667] as [number, number] },
  { name: 'مدينة بدر الصناعية', coordinates: [31.7378, 30.1332] as [number, number] },
  { name: 'مدينة العبور', coordinates: [31.4820, 30.2312] as [number, number] },
  { name: 'الشروق ومدينتي', coordinates: [31.6333, 30.1167] as [number, number] },
  { name: 'القاهرة الجديدة والتجمع', coordinates: [31.5034, 30.0055] as [number, number] },
  { name: 'مدينة نصر ومصر الجديدة', coordinates: [31.3400, 30.0880] as [number, number] }
]

export default function ServiceCoverage() {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<MapRef | null>(null)
  const [activeArea, setActiveArea] = useState<string | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (leftRef.current) {
        gsap.fromTo(leftRef.current,
          { opacity: 0, x: -40 },
          {
            opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          }
        )
      }
      if (rightRef.current) {
        gsap.fromTo(rightRef.current,
          { opacity: 0, x: 40 },
          {
            opacity: 1, x: 0, duration: 0.9, delay: 0.2, ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          }
        )
      }
    })

    return () => ctx.revert()
  }, [])

  const handleAreaClick = (area: typeof coverageAreasWithCoords[0]) => {
    setActiveArea(area.name)
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: area.coordinates,
        zoom: area.name === 'الإسكندرية والساحل' ? 11 : 12,
        duration: 1500,
        essential: true
      })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 border-t border-slate-100"
      dir="rtl"
    >
      <div className="max-w-[1200px] mx-auto px-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-16 items-center">
          {/* Left — Coverage Info */}
          <div ref={leftRef}>
            <span className="font-body font-semibold text-[22px] text-gold uppercase tracking-[0.08em] bg-gold/10 px-3 py-1.5 rounded-full">
              تغطيتنا الجغرافية الشاملة
            </span>
            <h2 className="font-display font-extrabold text-2xl md:text-[40px] heading-gradient mt-[21px] ml-[1px] mr-0 mb-[-3px] pl-[1px] pt-[1px] pb-0 pr-[1px] rounded-none h-[116px] w-[501px] max-w-full leading-tight">
              نغطي جميع المدن الكبرى والمناطق الصناعية في مصر
            </h2>
            <p className="font-body text-base md:text-lg text-slate-600 leading-relaxed mt-4">
              نمتلك شبكة تشغيلية واسعة تربط بين المناطق السكنية الكثيفة والمناطق الصناعية الحيوية، مما يمكننا من الوصول السهل والسريع لكوادركم. اضغط على أي منطقة لتحديد موقعها على الخريطة.
            </p>

            {/* Coverage List */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {coverageAreasWithCoords.map((area) => (
                <button
                  key={area.name}
                  onClick={() => handleAreaClick(area)}
                  className={`flex items-center gap-2 p-2.5 rounded-xl border transition-all duration-300 text-right w-full font-body ${
                    activeArea === area.name
                      ? 'bg-gold/10 border-gold/40 text-gold shadow-xs'
                      : 'bg-white hover:bg-slate-50 border-slate-100 hover:border-slate-200 text-slate-700'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    activeArea === area.name ? 'bg-gold/20' : 'bg-slate-100'
                  }`}>
                    <MapPin size={13} className={activeArea === area.name ? 'text-gold' : 'text-slate-500'} />
                  </div>
                  <span className="font-medium text-sm md:text-base leading-tight">
                    {area.name}
                  </span>
                </button>
              ))}
            </div>

            <p className="font-body text-sm text-slate-500 italic mt-8 border-r-2 border-gold/40 pr-3">
              نحن جاهزون لتنظيم خطوط نقل خاصة بمؤسستكم ومصممة بدقة لتلبية احتياجات المسارات الجغرافية لكافة موظفيكم.
            </p>
          </div>

          {/* Right — Live Interactive Map */}
          <div ref={rightRef} className="w-full h-[520px] rounded-2xl shadow-xl border border-slate-100 overflow-hidden relative bg-slate-100">
            <Map
              ref={mapRef}
              center={[31.3357, 30.0844]} // Center generally around Cairo metropolis
              zoom={8.8}
              theme="light"
              className="h-full w-full"
            >
              <MapControls showZoom showLocate showFullscreen position="bottom-right" />
              {coverageAreasWithCoords.map((area) => (
                <MapMarker
                  key={area.name}
                  longitude={area.coordinates[0]}
                  latitude={area.coordinates[1]}
                  onClick={() => {
                    setActiveArea(area.name)
                    if (mapRef.current) {
                      mapRef.current.easeTo({
                        center: area.coordinates,
                        zoom: area.name === 'الإسكندرية والساحل' ? 11 : 12,
                        duration: 1000
                      })
                    }
                  }}
                >
                  <MarkerContent>
                    <div className="relative group cursor-pointer flex items-center justify-center">
                      <span className={`absolute inline-flex h-6 w-6 rounded-full opacity-60 transition-all duration-300 ${
                        activeArea === area.name ? 'animate-ping bg-gold' : 'bg-gold/40 group-hover:animate-ping'
                      }`} />
                      <div className={`relative h-4.5 w-4.5 rounded-full border-2 border-white shadow-md transition-all duration-300 ${
                        activeArea === area.name ? 'bg-amber-600 scale-120' : 'bg-gold group-hover:bg-amber-600'
                      }`} />
                    </div>
                  </MarkerContent>
                  <MarkerTooltip>
                    <span className="font-body font-bold text-xs text-slate-900 px-1 py-0.5">
                      {area.name}
                    </span>
                  </MarkerTooltip>
                </MapMarker>
              ))}
            </Map>
          </div>
        </div>
      </div>
    </section>
  )
}

