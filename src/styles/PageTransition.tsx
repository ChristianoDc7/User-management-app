import React, { FC } from 'react'
import { motion } from 'framer-motion'

const animatedOpacity = {
    initial : {opacity : 0},
    animate : {opacity : 1},
    exit : {opacity : 0}
}

const animatedMoves = {
    initial : {x : -100},
    animate : {x : 0 },
    exit : {x : 100}
}

const PageTransition : FC = ({children}) => {
  return (
    <motion.div
        variants={animatedOpacity}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{duration : 3}}
    >
        {children}
    </motion.div>
  )
}

export default PageTransition