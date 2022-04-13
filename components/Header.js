import styles from "./css_modules/Header.module.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Header({ title }) {
  const { fields } = title;
  return (
    <header className={styles.header}>
      {fields.map((item, data) => {
        return <div key={data}>{documentToReactComponents(item.title)}</div>;
      })}
      {fields.map((item, data) => {
        return <div key={data}>{documentToReactComponents(item.about)}</div>;
      })}
    </header>
  );
}
