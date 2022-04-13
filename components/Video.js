import styles from "./css_modules/Video.module.css";
import { motion } from "framer-motion";

export default function BlurImage({ video }) {
  const { fields } = video;
  return (
    <>
      {fields.map((item, data) => {
        return (
          <motion.video
            className={styles.video}
            key={data}
            width="100%"
            controls
            playsInline
            poster={`https:` + item.videoPoster.fields.file.url}
            type="video/mp4"
            // layout
            // variants={cardVariant}
            initial={{ y: 80, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                opacity: {
                  duration: 0.4,
                  ease: "easeOut",
                },
                duration: 0.6,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true }}
          >
            <source src={`https:` + item.video.fields.file.url} type="video/ogg" />
          </motion.video>
        );
      })}
    </>
  );
}
