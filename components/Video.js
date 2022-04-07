import styles from "./css_modules/Video.module.css";

export default function BlurImage({ video }) {
  const { fields } = video;
  return (
    <>
      {fields.map((item, data) => {
        return (
          <video
            className={styles.video}
            key={data}
            width="100%"
            controls
            playsInline
            poster={`https:` + item.videoPoster.fields.file.url}
          >
            <source src={`https:` + item.video.fields.file.url} type="video/ogg" />
          </video>
        );
      })}
    </>
  );
}
