import { cn } from "./utils.js";

export function GridBackground({ children, className }) {
  return (
    <div className={cn("relative min-h-screen w-full", className)}>
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground) / 0.03) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground) / 0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      {/* Radial gradient fade at edges */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-background" />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
