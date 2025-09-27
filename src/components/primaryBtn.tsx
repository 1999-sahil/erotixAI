import { useState } from "react";
import { Link } from "react-router-dom";

interface Ripple {
  x: number;
  y: number;
  key: number;
}

interface PrimaryBtnProps {
    text: string;
    href: string;
}

export default function PrimaryBtn({ text, href }: PrimaryBtnProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple: Ripple = {
      x,
      y,
      key: Date.now(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.key !== newRipple.key));
    }, 1000); // duration matches animation
  };

  return (
      <Link to={href} className="space-x-5">
        {/* Button 1 */}
        <button
          onClick={createRipple}
          className="relative w-full overflow-hidden px-[12px] py-[8px] lg:px-[20px] lg:py-[13px] cursor-pointer font-redhat font-medium text-[12px] lg:text-[16px] leading-[22px] -tracking-[0.18px] text-white bg-primary rounded-[12px] border-b border-primary"
        >
          {text}
          {ripples.map((r) => (
            <span
              key={r.key}
              style={{ left: r.x, top: r.y }}
              className="absolute bg-white w-0 h-0 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ripple"
            ></span>
          ))}
        </button>
      </Link>
  );
}
