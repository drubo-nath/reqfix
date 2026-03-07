"use client"

import React from "react"
import { Menus } from "./ui/menus"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { AnimatedShinyButton } from "./ui/AnimatedButton"

const menuItems = [
  { name: "Workflow", href: "#workflow" },
  { name: "Features", href: "#features" },
  { name: "Benefits", href: "#benefits" },
]

export default function Navbar() {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 4)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className={cn(
          "fixed z-50 w-full px-3 transition-colors duration-300 md:px-10 ",
          isScrolled ? "border-transparent mt-5" : "border-b"
        )}
      >
        <div
          className={cn(
            "mx-auto transition-all duration-300",
            isScrolled &&
            "bg-[oklch(0.141 0.005 285.823)]/50 max-w-5xl rounded-2xl border px-3 backdrop-blur-xl"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-3 py-3">
            <div className="flex w-full justify-between lg:w-auto">
              <Link href="#" aria-label="home" className="flex items-center gap-2">
                <Image
                  src="reqFix.svg"
                  alt="ReqFix"
                  height={50}
                  width={50}
                  className="z-10 block h-8 w-full object-contain"
                />
                <span className="text-2xl font-bold tracking-tight text-white">ReqFix</span>
              </Link>
              <div className="flex gap-2">
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                  className="relative z-20 block cursor-pointer p-2.5 pr-4 lg:hidden"
                >
                  {menuState ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32" fill="none">
                    <g stroke="white" strokeWidth="2" strokeLinecap="round">
                      <line x1="8" y1="10" x2="25" y2="10"/>
                      <line x1="15" y1="16" x2="25" y2="16"/>
                      <line x1="12" y1="22" x2="25" y2="22"/>
                    </g>
                  </svg>
                  )}
                  <span className="sr-only">Toggle menu</span>
                </button>
              </div>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <Menus />
            </div>

            <div className="shadow-3xl hidden w-full flex-wrap items-center justify-end space-y-8 rounded-sm border p-3 shadow-zinc-300/20 backdrop-blur-2xl in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent">
              <AnimatedShinyButton>Join Waitlist</AnimatedShinyButton>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}


