import "../styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/antd.css";
import News from "./News";
import IndexPage from "./IndexPage";
import "../styles/navbar.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <IndexPage />
      <News />
    </div>
  );
}

export default MyApp;
