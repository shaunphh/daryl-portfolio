import Image from "next/image";
import { useState } from "react";
import styles from "./css_modules/BlurImage.module.css";
import clsx from "clsx";

function BlurImage(image) {
  const [isLoading, setLoading] = useState(true);
  const { fields } = image;
  console.log(fields);
  return (
    <>
      {fields.map((item, data) => {
        return (
          <Image
            key={data}
            src={`https:` + item.fields.file.url}
            width={item.fields.file.details.image.width}
            height={item.fields.file.details.image.height}
            alt={item.fields.title}
            className={clsx(styles.blurImage, "ease", isLoading ? "filter" : "nofilter")}
            onLoadingComplete={() => setLoading(false)}
          />
        );
      })}
    </>
  );
}
