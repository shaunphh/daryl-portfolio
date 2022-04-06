import styles from "./css_modules/Gallery2.module.css";
import Image from "next/image";

export default function Gallery2({ item }) {
  const { fields } = item;
  return (
    <div className={styles.gallery2}>
      {fields.map((item) => {
        return item.gallery2.map((item, data) => {
          return <Image key={data} src={`https:` + item.fields.file.url} width={item.fields.file.details.image.width} height={item.fields.file.details.image.height} alt={item.fields.title} />;
        });
      })}
    </div>
  );
}
