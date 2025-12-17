"use client";

import { motion } from "framer-motion";
import { InvitationPreview } from "./InvitationPreview";

export function AnimatedInvitationPreview() {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateZ: 2 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
        }}
        whileHover={{ rotateY: 15, rotateX: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <InvitationPreview />
      </motion.div>
    </motion.div>
  );
}
