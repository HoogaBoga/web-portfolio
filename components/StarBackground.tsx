"use client"
import { useEffect, useState } from "react"

// This JS function replaces the SASS @function and @for loop!
const generateSpace = (numStars: number) => {
  let shadow = []
  for (let i = 0; i < numStars; i++) {
    // Generates random X and Y coordinates up to 2000px
    shadow.push(
      `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px #FFF`,
    )
  }
  return shadow.join(", ")
}

export default function StarBackground() {
  const [starsSmall, setStarsSmall] = useState("")
  const [starsMedium, setStarsMedium] = useState("")
  const [starsLarge, setStarsLarge] = useState("")

  // We use useEffect so the random numbers generate on the client,
  // preventing a Next.js hydration crash!
  useEffect(() => {
    setStarsSmall(generateSpace(700))
    setStarsMedium(generateSpace(200))
    setStarsLarge(generateSpace(100))
  }, [])

  if (!starsSmall) return null // Wait for stars to generate before rendering

  return (
    // fixed inset-0 z-[-1] locks it to the background behind all your portfolio content
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#1B2735_0%,_#090A0F_100%)]">
      <div
        className="stars-small"
        style={{ "--star-shadow": starsSmall } as React.CSSProperties}
      ></div>
      <div
        className="stars-medium"
        style={{ "--star-shadow": starsMedium } as React.CSSProperties}
      ></div>
      <div
        className="stars-large"
        style={{ "--star-shadow": starsLarge } as React.CSSProperties}
      ></div>
    </div>
  )
}
