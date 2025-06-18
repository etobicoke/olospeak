"use client"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import logo from "../../../public/images/favicon-bleu.png"
import logo1 from "../../../public/images/Logo-bleu.png"

export default function HomePage() {
  const [logoVisible, setLogoVisible] = useState(true)
  const [showTextAndLogo1, setShowTextAndLogo1] = useState(false)

  useEffect(() => {
    const spinTimer = setTimeout(() => {
      setLogoVisible(false)
    }, 2000)

    return () => clearTimeout(spinTimer)
  }, [])

  useEffect(() => {
    if (!logoVisible) {
      const showTimer = setTimeout(() => {
        setShowTextAndLogo1(true)
      }, 500)

      return () => clearTimeout(showTimer)
    }
  }, [logoVisible])

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw", overflow: "hidden", }}>
      {logoVisible && (
        <motion.div
          style={{ position: "absolute", top: "50%", left: "50%", translate: "-50% -50%", }}
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 360 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <Image src={logo} alt="logo_image" width={300} height={300} />
        </motion.div>
      )}
      {showTextAndLogo1 && (
        <motion.h1
          style={{ position: "absolute", top: "40%", left: "50%", translate: "-50% -50%", margin: 0, fontSize: 28, color: "#000", textAlign: "center", whiteSpace: "nowrap" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Le site Olospeak est en construction
        </motion.h1>
      )}
      {showTextAndLogo1 && (
        <motion.div
          style={{ position: "absolute", top: 16, left: 16, }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image src={logo1} alt="logo1" width={150} height={150} />
        </motion.div>
      )}
    </div>
  )
}
