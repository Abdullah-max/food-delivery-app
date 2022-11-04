import style from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Pizza Restaurant in New york</title>
        <meta name="description" content="Best pizza shop in downtown" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
