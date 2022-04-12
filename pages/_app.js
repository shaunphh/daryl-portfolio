import "@styles/globals.css";
import ScrollContainer from "utils/scrollContainer";
import { BrowserView, MobileView } from "react-device-detect";

function Application({ Component, pageProps }) {
  return (
    <>
      <BrowserView>
        <ScrollContainer>
          <Component {...pageProps} />
        </ScrollContainer>
      </BrowserView>
      <MobileView>
        <Component {...pageProps} />
      </MobileView>
    </>
  );
}

export default Application;
