import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import News from "./News";
import IndexPage from "./IndexPage";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <IndexPage />
      <News />
    </div>
  );
}

export default MyApp;
