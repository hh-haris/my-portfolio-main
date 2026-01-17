import React, { useState, useRef, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const RippleButton = forwardRef(
  ({ children, className, variant = "default", rippleOnHover = false, onClick, onMouseEnter, ...props }, ref) => {
    const [ripples, setRipples] = useState([]);
    const buttonRef = useRef(null);
    const rippleIdRef = useRef(0);

    const createRipple = (e) => {
      const button = buttonRef.current || ref?.current;
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newRipple = {
        x,
        y,
        id: rippleIdRef.current++,
      };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    };

    const handleClick = (e) => {
      if (!rippleOnHover) {
        createRipple(e);
      }
      onClick?.(e);
    };

    const handleMouseEnter = (e) => {
      if (rippleOnHover) {
        createRipple(e);
      }
      onMouseEnter?.(e);
    };

    const baseStyles = "relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
    
    const variantStyles = {
      default: "bg-primary text-primary-foreground hover:bg-foreground hover:text-background",
      outline: "border border-input bg-background hover:bg-foreground hover:text-background",
      ghost: "hover:bg-accent hover:text-accent-foreground",
    };

    return (
      <button
        ref={ref || buttonRef}
        className={cn(baseStyles, variantStyles[variant], className)}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        {...props}
      >
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full bg-current opacity-30 animate-ripple pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
        {children}
      </button>
    );
  }
);

RippleButton.displayName = "RippleButton";
