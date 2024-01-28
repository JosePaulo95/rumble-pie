import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

interface PieProps {
  show: boolean;
}

const Pie: React.FC<PieProps> = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="pie"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            // background: 'url("./assets/img/0-torta-1.svg")',
            backgroundSize: 'cover',
          }}
        >
          <motion.div
            initial={{ opacity: 1, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1.3 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'url("./assets/img/0-torta-1.svg")',
              backgroundSize: 'cover',
            }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 1, scale: 0.8 }}
            animate={{ opacity: 1, scale: 0.9 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'url("./assets/img/0-torta-2.svg")',
              backgroundSize: 'cover',
            }}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Pie;
