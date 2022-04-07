import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import styles from "./css_modules/Gallery2.module.css";

export default function Gallery1({ item }) {
  const [isLoading, setLoading] = useState(true);
  const { fields } = item;
  return (
    <div className={styles.gallery2}>
      {fields.map((item) => {
        return item.gallery2.map((items, data) => {
          return (
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
            />
          );
        });
      })}
    </div>
  );
}
