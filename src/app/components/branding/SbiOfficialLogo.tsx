"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export const SBI_OFFICIAL_LOGO_SRC = "/sbi-official-logo.png";
export const SBI_SYMBOL_SRC = "/sbi-symbol.png";

const INTRINSIC_W = 526;
const INTRINSIC_H = 330;
/** Official circular symbol asset (transparent PNG, square canvas). */
const SYMBOL_INTRINSIC = 512;

type SbiOfficialLogoProps = {
  className?: string;
  /** Tailwind classes limiting rendered height (logo scales proportionally). */
  heightClass?: string;
  /** Tailwind classes limiting max width */
  widthClass?: string;
  priority?: boolean;
};

/**
 * Official SBI horizontal logo (keyhole + wordmark on purple). Uses object-contain; never crops or stretches.
 */
export function SbiOfficialLogo({
  className,
  heightClass = "max-h-10",
  widthClass = "max-w-[160px]",
  priority,
}: SbiOfficialLogoProps) {
  return (
    <Image
      src={SBI_OFFICIAL_LOGO_SRC}
      alt="State Bank of India"
      width={INTRINSIC_W}
      height={INTRINSIC_H}
      priority={priority}
      className={cn("w-auto object-contain shrink-0", heightClass, widthClass, className)}
    />
  );
}

type SbiSidebarSymbolProps = {
  className?: string;
  /** Size / layout overrides (applies to the image; no outer wrapper). */
  boxClassName?: string;
  priority?: boolean;
};

/**
 * Circular SBI keyhole symbol only — transparent PNG on the page background.
 * No white tile, border, shadow, or padding around the mark.
 */
export function SbiSidebarSymbol({ className, boxClassName, priority }: SbiSidebarSymbolProps) {
  return (
    <Image
      src={SBI_SYMBOL_SRC}
      alt="State Bank of India"
      width={SYMBOL_INTRINSIC}
      height={SYMBOL_INTRINSIC}
      priority={priority}
      className={cn(
        "h-11 w-11 shrink-0 object-contain bg-transparent p-0 shadow-none ring-0 border-0 outline-none",
        className,
        boxClassName,
      )}
    />
  );
}
