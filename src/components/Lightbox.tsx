import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: string[];
  title: string;
  startIndex?: number;
  onClose: () => void;
}

export function Lightbox({ images, title, startIndex = 0, onClose }: LightboxProps) {
  const [index, setIndex] = useState(startIndex);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
        onClick={onClose}
      >
        <button
          aria-label="Fechar galeria"
          className="absolute right-5 top-5 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10"
          onClick={onClose}
        >
          <X className="h-7 w-7" />
        </button>

        <button
          aria-label="Imagem anterior"
          className="absolute left-3 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 md:left-8"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
        >
          <ChevronLeft className="h-9 w-9" />
        </button>

        <motion.img
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          src={images[index]}
          alt={`${title} — foto ${index + 1}`}
          className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
          onClick={(e) => e.stopPropagation()}
        />

        <button
          aria-label="Próxima imagem"
          className="absolute right-3 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 md:right-8"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
        >
          <ChevronRight className="h-9 w-9" />
        </button>

        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-white/70">
          {index + 1} / {images.length}
        </span>
      </motion.div>
    </AnimatePresence>
  );
}
