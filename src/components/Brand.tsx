import Link from 'next/link';
import { asset } from '@/data/site';

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link href="/" className={`brand${footer ? ' footer-brand' : ''}`} aria-label="SUPERCARS.EC, inicio">
      <span className="brand-symbol" aria-hidden="true">
        <img
          src={asset('/images/supercars/brand/supercars-signature.png')}
          width="282"
          height="190"
          alt=""
        />
      </span>
      <span className="brand-wordmark">SUPER<span>CARS</span><small>.EC</small></span>
    </Link>
  );
}
