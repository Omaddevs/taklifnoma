import { motion } from 'framer-motion'

function RevealSection({ children, className = '' }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default RevealSection
