import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={site.whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-white shadow-lg shadow-black/20 md:px-5"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">Falar no WhatsApp</span>
      <span className="absolute -z-10 inline-flex h-14 w-14 animate-ping rounded-full bg-[#25D366] opacity-30" />
    </motion.a>
  );
}
