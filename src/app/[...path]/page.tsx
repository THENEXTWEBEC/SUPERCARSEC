import { SitePage } from '@/components/SitePage';
import { routes,vehicles } from '@/data/site';
import type { Metadata } from 'next';
export function generateStaticParams(){return [...routes.map(x=>({path:[x]})),...vehicles.map(x=>({path:['vehiculos',x.slug]}))]}
export function generateMetadata({params}:{params:Promise<{path:string[]}>}):Promise<Metadata>{return params.then(({path})=>{const slug=path.at(-1)||'';const vehicle=vehicles.find(v=>v.slug===slug);const title=vehicle?`${vehicle.brand} ${vehicle.model} ${vehicle.year}`:slug.replaceAll('-',' ');return {title,alternates:{canonical:'/'+path.join('/')+'/'},description:vehicle?`${vehicle.brand} ${vehicle.model} ${vehicle.year}. Datos publicados por SUPERCARS; confirma disponibilidad antes de visitarnos.`:`Conoce ${title} en SUPERCARS, Cumbayá, Quito.`}})}
export default function DynamicPage({params}:{params:Promise<{path:string[]}>}){return params.then(({path})=><SitePage route={path.join('/')}/>)}
