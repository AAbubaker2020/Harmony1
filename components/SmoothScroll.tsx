"use client"

import { useEffect } from "react"

export const SmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash && target.origin + target.pathname === window.location.href) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
    }

    document.addEventListener("click", handleSmoothScroll)
    return () => document.removeEventListener("click", handleSmoothScroll)
  }, [])

  return null
}

