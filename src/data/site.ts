export const business = {
  name: 'SUPERCARS', phone: '0998374984', whatsapp: '593998374984', email: 'info@supercars.ec',
  address: 'Alba Calderón, Cumbayá, Quito 170157, Ecuador',
  site: 'https://thenextwebec.github.io/SUPERCARSEC',
  source: 'https://ecuador.patiotuerca.com/ptx/dealers-profile/supercars/1368'
};
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
export const images = {
  hero: asset('/images/supercars/home/hero-arrival.jpg'),
  discover: asset('/images/supercars/home/discover-interior.jpg'),
  detail: asset('/images/supercars/home/reveal-detail.jpg'),
  detailing: asset('/images/supercars/home/detailing-polish.jpg'),
  detailingPage: asset('/images/supercars/home/detailing-interior.jpg'),
  closing: asset('/images/supercars/home/closing-drive.jpg')
};
export type Vehicle = { id:string; slug:string; brand:string; model:string; version?:string; year:number; km:number; price:number; transmission:string; body:string; category:string; source:string; updated:string; fuel?:string; engine?:string; drive?:string; equipment?:string[]; status?:'por-confirmar'|'disponible'|'reservado'|'vendido'; image?:string; inspection?:Record<string,string> };
const source = business.source;
export const vehicles: Vehicle[] = [
  {id:'sc-01',image:asset('/images/supercars/inventory/generic-performance-suv.jpg'),slug:'maserati-grecale-gt-2024',brand:'Maserati',model:'Grecale',version:'GT',year:2024,km:19000,price:79990,transmission:'Automática',body:'SUV',category:'rendimiento',source,updated:'2026-11-08'},
  {id:'sc-02',image:asset('/images/supercars/inventory/generic-sedan.jpg'),slug:'bmw-330e-2024',brand:'BMW',model:'330e',year:2024,km:32200,price:54990,transmission:'Automática',body:'Sedán',category:'ciudad',source,updated:'2026-11-08'},
  {id:'sc-03',image:asset('/images/supercars/inventory/generic-sedan.jpg'),slug:'mercedes-benz-c200-2020',brand:'Mercedes-Benz',model:'C200',year:2020,km:25980,price:40490,transmission:'Automática',body:'Sedán',category:'ciudad',source,updated:'2026-11-08'},
  {id:'sc-04',image:asset('/images/supercars/inventory/generic-crossover.jpg'),slug:'bmw-x2-sdrive-20i-2019',brand:'BMW',model:'X2',version:'sDrive 20i',year:2019,km:59500,price:37990,transmission:'Automática',body:'SUV',category:'familia',source,updated:'2026-11-08'},
  {id:'sc-05',image:asset('/images/supercars/inventory/generic-performance-suv.jpg'),slug:'dodge-durango-gt-plus-2017',brand:'Dodge',model:'Durango',version:'GT Plus',year:2017,km:74300,price:29990,transmission:'Automática',body:'SUV',category:'aventura',source,updated:'2026-11-08'},
  {id:'sc-06',image:asset('/images/supercars/inventory/generic-family-suv.jpg'),slug:'hyundai-tucson-2024',brand:'Hyundai',model:'Tucson',year:2024,km:34700,price:28990,transmission:'Automática',body:'SUV',category:'familia',source,updated:'2026-11-08'},
  {id:'sc-07',image:asset('/images/supercars/inventory/generic-family-suv.jpg'),slug:'leapmotor-c11-2023',brand:'Leapmotor',model:'C11',year:2023,km:24600,price:27490,transmission:'Automática',body:'SUV',category:'familia',source,updated:'2026-11-08'},
  {id:'sc-08',image:asset('/images/supercars/inventory/generic-crossover.jpg'),slug:'peugeot-2008-2026',brand:'Peugeot',model:'2008',year:2026,km:10900,price:25990,transmission:'Automática',body:'SUV',category:'ciudad',source,updated:'2026-11-08'},
  {id:'sc-09',image:asset('/images/supercars/inventory/generic-family-suv.jpg'),slug:'citroen-berlingo-2025',brand:'Citroën',model:'Berlingo',year:2025,km:41600,price:25990,transmission:'Manual',body:'Utilitario',category:'familia',source,updated:'2026-11-08'},
  {id:'sc-10',image:asset('/images/supercars/inventory/generic-crossover.jpg'),slug:'nissan-qashqai-2016',brand:'Nissan',model:'Qashqai',year:2016,km:99300,price:17490,transmission:'Manual',body:'SUV',category:'familia',source,updated:'2026-11-08'}
];
export const money=(n:number)=>new Intl.NumberFormat('es-EC',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
export const number=(n:number)=>new Intl.NumberFormat('es-EC').format(n);
export const wa=(message:string)=>`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
export const vehicleWa=(v:Vehicle)=>wa(`Hola, estoy interesado en el ${v.brand} ${v.model} ${v.year} publicado por Supercars. Quisiera confirmar su disponibilidad y coordinar una visita.`);
export const routes=['vehiculos','mi-garage','comparar','vende-tu-auto','financiamiento','detailing','nosotros','contacto','agendar-visita','privacidad','terminos'];
