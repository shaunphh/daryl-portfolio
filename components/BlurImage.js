import Image from "next/image";

export default function BlurImage({ image }) {
  const { fields } = image;
  return (
    <>
      {fields.map((item, data) => {
        return <Image key={data} src={`https:` + item.fields.file.url} width={item.fields.file.details.image.width} height={item.fields.file.details.image.height} alt={item.fields.title} />;
      })}
    </>
  );
}


/////////

import styles from "./css_modules/Gallery2.module.css";
import BlurImage from "./BlurImage.js";

export default function Gallery2({ item }) {
  const { fields } = item;
  return (
    <div className={styles.gallery2}>
      {fields.map((image) => {
        <BlurImage image={image} />;
      })}
    </div>
  );
}
