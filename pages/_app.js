import "@styles/globals.css";
import ScrollContainer from "utils/scrollContainer";

function Application({ Component, pageProps }) {
  return (
    <ScrollContainer>
      <Component {...pageProps} />
    </ScrollContainer>
  );
}

export default Application;
