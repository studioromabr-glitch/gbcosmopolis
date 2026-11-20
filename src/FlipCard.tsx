import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import './FlipCard.css';

export interface FlipCardProps {
  front?: ReactNode;
  back?: ReactNode;
  flipped?: boolean;
  defaultFlipped?: boolean;
  onFlipChange?: (flipped: boolean) => void;
  axis?: 'y' | 'x';
  flipOnClick?: boolean;
  draggable?: boolean;
  dragDistance?: number;
  tilt?: boolean;
  tiltMax?: number;
  glare?: boolean;
  glareOpacity?: number;
  hoverScale?: number;
  perspective?: number;
  stiffness?: number;
  damping?: number;
  width?: number;
  height?: number;
  radius?: number;
  background?: string;
  color?: string;
  shadow?: boolean;
  shadowColor?: string;
  shadowOpacity?: number;
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
}

export default function FlipCard({
  front = null,
  back = null,
  flipped,
  defaultFlipped = false,
  onFlipChange,
  axis = 'y',
  flipOnClick = true,
  draggable = true,
  width = 310,
  height = 410,
  radius = 24,
  disabled = false,
  ariaLabel = 'Flip card',
  className = '',
}: FlipCardProps) {
  const isControlled = flipped !== undefined;
  const [internalFlipped, setInternalFlipped] = useState(defaultFlipped);
  const startXRef = useRef<number | null>(null);
  const startYRef = useRef<number | null>(null);
  const draggedRef = useRef(false);

  const currentFlipped = isControlled ? flipped : internalFlipped;

  useEffect(() => {
    if (isControlled && flipped !== undefined) {
      setInternalFlipped(flipped);
    }
  }, [flipped, isControlled]);

  const toggleFlip = () => {
    if (disabled) return;
    const next = !currentFlipped;
    if (!isControlled) {
      setInternalFlipped(next);
    }
    onFlipChange?.(next);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (disabled || !draggable) return;
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    draggedRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (disabled || !draggable || startXRef.current === null || startYRef.current === null) {
      return;
    }
    const dx = Math.abs(e.clientX - startXRef.current);
    const dy = Math.abs(e.clientY - startYRef.current);
    const dist = axis === 'x' ? dy : dx;
    if (dist > 35 && !draggedRef.current) {
      draggedRef.current = true;
      toggleFlip();
      startXRef.current = null;
      startYRef.current = null;
    }
  };

  const handlePointerUp = () => {
    startXRef.current = null;
    startYRef.current = null;
  };

  const handleClick = () => {
    if (disabled || !flipOnClick) return;
    if (draggedRef.current) {
      draggedRef.current = false;
      return;
    }
    toggleFlip();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled || !flipOnClick) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    }
  };

  const styleVars = {
    '--fc-w': `${width}px`,
    '--fc-h': `${height}px`,
    '--fc-radius': `${radius}px`,
  } as CSSProperties;

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-pressed={currentFlipped}
      aria-label={ariaLabel}
      aria-disabled={disabled || undefined}
      data-axis={axis}
      data-flipped={currentFlipped ? 'true' : 'false'}
      className={`flip-card${className ? ` ${className}` : ''}`}
      style={styleVars}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="flip-card__inner">
        <div className="flip-card__face flip-card__face--front">{front}</div>
        <div className="flip-card__face flip-card__face--back">{back}</div>
      </div>
    </div>
  );
}