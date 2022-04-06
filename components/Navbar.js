import styles from "./css_modules/Navbar.module.css";

export default function NavBar({ icon }) {
  const { fields } = icon;
  return (
    <nav className={styles.navbar}>
      {fields.map((item) => {
        return (
          <img
            src={`https:` + item.icons[0].fields.file.url}
            width={item.icons[0].fields.file.details.image.width}
            height={item.icons[0].fields.file.details.image.height}
            alt={item.icons[0].fields.title}
          />
        );
      })}
      <ul>
        <li>
          {fields.map((item, data, index, key) => {
            return (
              <a key={item} href="mailto:darylf.design@gmail.com?subject=Hey">
                <img
                  key={Math.random()}
                  src={`https:` + item.icons[1].fields.file.url}
                  width={item.icons[1].fields.file.details.image.width}
                  height={item.icons[1].fields.file.details.image.height}
                  alt={item.icons[1].fields.title}
                />
              </a>
            );
          })}
        </li>
        <li>
          {fields.map((item, data, key) => {
            return (
              <a key={item} href="https://dribbble.com/darylfitzsimons" target="_blank">
                <img
                  key={Math.random()}
                  src={`https:` + item.icons[2].fields.file.url}
                  width={item.icons[2].fields.file.details.image.width}
                  height={item.icons[2].fields.file.details.image.height}
                  alt={item.icons[2].fields.title}
                />
              </a>
            );
          })}
        </li>
        <li>
          {fields.map((item, data, index, key) => {
            console.log(item.icons);
            return (
              <a
                key={item}
                href="https://linkedin.com/in/daryl-fitzsimons-08044b74"
                target="_blank"
              >
                <img
                  key={Math.random()}
                  src={`https:` + item.icons[3].fields.file.url}
                  width={item.icons[3].fields.file.details.image.width}
                  height={item.icons[3].fields.file.details.image.height}
                  alt={item.icons[3].fields.title}
                />
              </a>
            );
          })}
        </li>
      </ul>
    </nav>
  );
}
