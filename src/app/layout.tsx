import type { Metadata } from 'next';
import './globals.css';
import { business } from '@/data/site';
export const metadata: Metadata = {metadataBase:new URL(business.site),title:{default:'SUPERCARS | Una manera diferente de conducir',template:'%s | SUPERCARS'},description:'Explora una selección de vehículos seminuevos, vende tu auto y descubre servicios de financiamiento y detailing en Cumbayá, Quito.',openGraph:{siteName:'SUPERCARS',locale:'es_EC',type:'website'},robots:{index:false,follow:true}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es" data-scroll-behavior="smooth"><body>{children}</body></html>}
