import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import styles from "./css_modules/Gallery1.module.css";
// import useNextBlurhash from "use-next-blurhash";
import { motion } from "framer-motion";

export default function Gallery1({ item }) {
  const [isLoading, setLoading] = useState(true);
  // const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");
  const { fields } = item;
  return (
    <div className={styles.gallery1}>
      {fields.map((item) => {
        return item.gallery1.map((items, data) => {
          return (
            <motion.div
            // initial={{ opacity: 0, y: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // className={`image-block ${id}`}
            // animate={{
            //   scale: 0.5,
            //   transition: {
            //     duration: 1,
            //   },
            // }}
            >
              <Image
                key={data}
                src={`https:` + items.fields.file.url}
                width={items.fields.file.details.image.width}
                height={items.fields.file.details.image.height}
                alt={items.fields.title}
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
    </div>
  );
}
