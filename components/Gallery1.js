import styles from "./css_modules/Gallery1.module.css";
import Image from "next/image";

export default function Gallery1({ item }) {
  const { fields } = item;
  return (
    <div className={styles.gallery1}>
      {fields.map((item) => {
        return item.gallery1.map((item, data) => {
          return <Image key={data} src={`https:` + item.fields.file.url} width={item.fields.file.details.image.width} height={item.fields.file.details.image.height} alt={item.fields.title} />;
        });
      })}
    </div>
  );
}
