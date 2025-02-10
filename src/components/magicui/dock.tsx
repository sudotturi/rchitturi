"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { forwardRef, useRef } from "react";

export interface DockProps extends VariantProps<typeof dockVariants> {
  className?: string;
  magnification?: number;
  distance?: number;
  children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 60;
const DEFAULT_DISTANCE = 140;

const dockVariants = cva(
  "mx-auto w-max h-full p-2 flex items-end rounded-full border"
);

const Dock = forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      children,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      ...props
    },
    ref
  ) => {
    const mousex = useMotionValue(Infinity);

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mousex.set(e.pageX)}
        onMouseLeave={() => mousex.set(Infinity)}
        {...props}
        className={cn(dockVariants(), className)}
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { mousex, magnification, distance } as DockIconProps)
            : child
        )}
      </motion.div>
    );
  }
);

Dock.displayName = "Dock";

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mousex?: any;
  className?: string;
  children?: React.ReactNode;
}

const DockIcon = forwardRef<HTMLDivElement, DockIconProps>(
  (
    {
      size,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      mousex,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const distanceCalc = useTransform(mousex, (val: number) => {
      const bounds = (ref as React.RefObject<HTMLDivElement>)?.current?.getBoundingClientRect() ?? {
        x: 0,
        width: 0,
      };
      return val - bounds.x - bounds.width / 2;
    });

    let widthSync = useTransform(distanceCalc, [-distance, 0, distance], [40, magnification, 40]);

    let width = useSpring(widthSync, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    });

    return (
      <motion.div
        ref={ref}
        style={{ width }}
        className={cn("flex aspect-square cursor-pointer items-center justify-center rounded-full", className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

DockIcon.displayName = "DockIcon";

export { Dock, DockIcon, dockVariants };
