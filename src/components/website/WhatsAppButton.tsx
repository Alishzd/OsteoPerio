'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeOut' }} className="fixed bottom-6 right-6 z-40">
          <AnimatePresence>
            {hovered && (
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} transition={{ duration: 0.2 }} className="absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-lg border border-[#E8E6DF] bg-white px-4 py-2.5 shadow-lg">
                <p className="text-sm font-medium text-charcoal">Questions before booking?</p>
                <p className="text-xs text-charcoal/55">Update this WhatsApp number before launch.</p>
                <div className="absolute bottom-0 right-6 h-2 w-2 translate-y-1/2 rotate-45 border-b border-r border-[#E8E6DF] bg-white" />
              </motion.div>
            )}
          </AnimatePresence>

          <a href="https://wa.me/34600000000" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#1EBB5B] hover:shadow-xl" aria-label="Contact us on WhatsApp">
            <MessageCircle className="h-6 w-6 text-white" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
