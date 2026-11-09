'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from '@/components/icons';
import { asset } from '@/data/site';

export function BeforeAfter() {
  const [split, setSplit] = useState(50);

  return (
    <div className="before-after" role="group" aria-label="Comparación visual del detailing">
      <img
        className="ba-after"
        src={asset('/images/supercars/detailing/after.jpg')}
        alt="Automóvil gris con la pintura limpia y brillante, imagen conceptual"
        loading="lazy"
      />
      <div className="ba-before" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}>
        <img
          src={asset('/images/supercars/detailing/before.jpg')}
          alt="El mismo automóvil antes de la limpieza, con polvo y marcas en la pintura, imagen conceptual"
          loading="lazy"
        />
      </div>
      <span className="ba-label ba-label-before" aria-hidden="true">Antes</span>
      <span className="ba-label ba-label-after" aria-hidden="true">Después</span>
      <div className="ba-divider" style={{ left: `${split}%` }} aria-hidden="true">
        <span className="ba-handle"><ArrowLeft size={15} /><ArrowRight size={15} /></span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={split}
        onChange={event => setSplit(Number(event.target.value))}
        aria-label="Desliza para comparar el antes y el después del detailing"
        aria-valuetext={`${split} por ciento antes, ${100 - split} por ciento después`}
      />
    </div>
  );
}
