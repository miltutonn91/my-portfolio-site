import * as React from "react"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"  // ← ★ 追加！

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** ボタンの色バリエーション */
  variant?: "green" | "pink" | "gray" | "white"
  asChild?: boolean 
}

export function Button({
  className,
  children,
  variant = "green",
  asChild = false, // ← ★ デフォルトfalse
  ...props
}: ButtonProps) {
  // asChild が true のときだけ <a> などをラップする
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(
        // 共通スタイル
        "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide",
        "px-6 py-2 transition-all duration-300 ease-out",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",

        // variant ごとの色切り替え
        variant === "green" &&
          "bg-[#2D735C] text-white hover:bg-[#25664D] focus:ring-[#2D735C]",
        variant === "pink" &&
          "bg-pink-400 text-white hover:bg-pink-500 focus:ring-pink-400",
        variant === "gray" &&
          "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300",
        variant === "white" &&
          "bg-white text-[#726E6E] border border-[rgba(0,0,0,0.05)] shadow-[0_4px_10px_rgba(0,0,0,0.08)] hover:bg-[#F5F5F5] hover:shadow-[0_6px_14px_rgba(0,0,0,0.12)] focus:ring-[#E0E0E0]",

        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
