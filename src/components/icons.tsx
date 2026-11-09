import type { CSSProperties, ReactNode } from 'react';

type Props = { size?: number; weight?: string; className?: string; style?: CSSProperties };

function Icon({ children, size = 18, weight = 'regular', className, style }: Props & { children: ReactNode }) {
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}
    fill="none" stroke="currentColor" strokeWidth={weight === 'thin' ? 1.25 : weight === 'bold' ? 2 : 1.6}
    strokeLinecap="round" strokeLinejoin="round" className={className} style={{ flexShrink: 0, ...style }}
    aria-hidden="true" focusable="false">{children}</svg>;
}

export function ArrowRight(props: Props) {
  return <Icon {...props} weight={props.weight ?? 'thin'}><path d="M4 12h16m-6-6 6 6-6 6" /></Icon>;
}
export function ArrowUpRight(props: Props) {
  return <Icon {...props} weight={props.weight ?? 'thin'}><path d="M5 19 19 5M8 5h11v11" /></Icon>;
}
export function ArrowLeft(props: Props) {
  return <Icon {...props} weight={props.weight ?? 'thin'}><path d="M20 12H4m6-6-6 6 6 6" /></Icon>;
}
export function Heart(props: Props) {
  return <Icon {...props}><path d="M20.8 5.5a5.2 5.2 0 0 0-7.4 0L12 6.9l-1.4-1.4a5.2 5.2 0 0 0-7.4 7.4L12 21l8.8-8.1a5.2 5.2 0 0 0 0-7.4Z" fill={props.weight === 'fill' ? 'currentColor' : 'none'} /></Icon>;
}
export function List(props: Props) {
  return <Icon {...props}><path d="M8 6h12M8 12h12M8 18h12" /><path d="M4 6h.01M4 12h.01M4 18h.01" strokeWidth="2.5" /></Icon>;
}
export function SquaresFour(props: Props) {
  return <Icon {...props}><rect x="3.5" y="3.5" width="7" height="7" rx=".7" /><rect x="13.5" y="3.5" width="7" height="7" rx=".7" /><rect x="3.5" y="13.5" width="7" height="7" rx=".7" /><rect x="13.5" y="13.5" width="7" height="7" rx=".7" /></Icon>;
}
export function X(props: Props) {
  return <Icon {...props}><path d="M5 5 19 19M19 5 5 19" /></Icon>;
}
export function Plus(props: Props) {
  return <Icon {...props}><path d="M12 4v16M4 12h16" /></Icon>;
}
export function Minus(props: Props) {
  return <Icon {...props}><path d="M4 12h16" /></Icon>;
}
export function SlidersHorizontal(props: Props) {
  return <Icon {...props}><path d="M4 6h7m4 0h5M4 12h3m4 0h9M4 18h11m4 0h1" /><circle cx="13" cy="6" r="2" /><circle cx="9" cy="12" r="2" /><circle cx="17" cy="18" r="2" /></Icon>;
}
export function Check(props: Props) {
  return <Icon {...props}><path d="m4 12 5.3 5.3L20 6.5" /></Icon>;
}
export function CaretDown(props: Props) {
  return <Icon {...props}><path d="m5 9 7 7 7-7" /></Icon>;
}
export function MapPin(props: Props) {
  return <Icon {...props}><path d="M20 10c0 5.3-8 11-8 11S4 15.3 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></Icon>;
}
export function Phone(props: Props) {
  return <Icon {...props}><path d="M6.2 3.5 9.1 3l2 4.2-2.1 2a14 14 0 0 0 5.8 5.8l2-2.1 4.2 2-.5 2.9a3 3 0 0 1-3.2 2.5A17 17 0 0 1 3.7 6.7a3 3 0 0 1 2.5-3.2Z" /></Icon>;
}
export function EnvelopeSimple(props: Props) {
  return <Icon {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Icon>;
}
export function WhatsappLogo(props: Props) {
  return <Icon {...props}><path d="M5 17.5 3.5 21l3.8-1.4A9 9 0 1 0 5 17.5Z" /><path d="M8.4 8.3c.4-.5.8-.4 1.1.1l.9 1.4-.8 1a7 7 0 0 0 3.5 3.5l1-.8 1.5.9c.4.3.5.7.1 1.1-.7.9-1.6 1.1-2.6.7a10 10 0 0 1-5.4-5.3c-.4-1-.2-1.9.7-2.6Z" /></Icon>;
}
export function InstagramLogo(props: Props) {
  return <Icon {...props}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".7" fill="currentColor" stroke="none" /></Icon>;
}
export function FacebookLogo(props: Props) {
  return <Icon {...props}><path d="M15.5 4H14a3 3 0 0 0-3 3v13M8 11h7" /></Icon>;
}
export function ShareNetwork(props: Props) {
  return <Icon {...props}><path d="m8 11 8-4M8 13l8 4" /><circle cx="5" cy="12" r="2.5" /><circle cx="19" cy="5" r="2.5" /><circle cx="19" cy="19" r="2.5" /></Icon>;
}
export function MagnifyingGlass(props: Props) {
  return <Icon {...props}><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></Icon>;
}
export function Gauge(props: Props) {
  return <Icon {...props}><path d="M4.5 17a8.5 8.5 0 1 1 15 0M12 12l4-4" /><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" /><path d="M7 18h10" /></Icon>;
}
export function CalendarBlank(props: Props) {
  return <Icon {...props}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4m10-4v4M3 10h18" /></Icon>;
}
export function Menu(props: Props) {
  return <Icon {...props}><path d="M3 6h18M3 12h18M3 18h18" /></Icon>;
}
