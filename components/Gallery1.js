import Image from "next/image";
import { useState, useEffect } from "react";
import clsx from "clsx";
import styles from "./css_modules/Gallery1.module.css";
// import useNextBlurhash from "use-next-blurhash";
import { motion } from "framer-motion";

export default function Gallery1({ item }) {
  // const [isLoading, setLoading] = useState(true);
  // const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { fields } = item;
  return (
    <motion.div
      // variants={cardsVariant}
      // initial="entering"
      // animate="entered"
      className={styles.gallery1}
    >
      {fields.map((item) => {
        return item.gallery1.map((items, data) => {
          return (
            <motion.div
              key={data}
              // layout
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
                  duration: 0.8,
                  ease: "easeOut",
                },
              }}
              viewport={{ once: true }}
            >
              <Image
                key={data}
                src={`https:` + items.fields.file.url}
                width={items.fields.file.details.image.width}
                height={items.fields.file.details.image.height}
                alt={items.fields.title}
                priority="true"
                // placeholder="blur"
                // blurDataURL={`/_next/image?url=${`https:` + items.fields.file.url}&w=16&q=1`}
                // className={clsx("ease", isLoading ? "filter" : "nofilter")}
                // onLoadingComplete={() => setLoading(false)}
                // onLoadingComplete={({ naturalWidth, naturalHeight }) =>
                //   setRatio(naturalWidth / naturalHeight)
                objectFit="cover"
                // }
              />
            </motion.div>
          );
        });
      })}
    </motion.div>
  );
}
