export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { business,routes,vehicles } from '@/data/site';
export default function sitemap():MetadataRoute.Sitemap{return ['',...routes,...vehicles.map(v=>'vehiculos/'+v.slug)].map(path=>({url:business.site+'/'+(path?path+'/':''),lastModified:new Date('2026-11-08')}))}
