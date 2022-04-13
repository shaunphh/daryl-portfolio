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
            // autoPlay
            // muted
            playsInline
            poster={`https:` + item.videoPoster.fields.file.url}
            src={`https:` + item.video.fields.file.url}
            // variants={cardVariant}
            initial={{ y: 80, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                opacity: {
                  duration: 0.8,
                  ease: [0.6, 0.01, -0.05, 0.95],
                },
                duration: 0.6,
                ease: "easeOut",
              },
            }}
            viewport={{ once: true, margin: "0px -20px 0px 0px" }}
          >
            <source src={`https:` + item.video.fields.file.url} type="video/mp4" />
          </motion.video>
        );
      })}
    </>
  );
}
