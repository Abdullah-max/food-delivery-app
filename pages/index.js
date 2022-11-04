import style from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Pizza Restaurant in New york</title>
        <meta name="description" content="Best pizza shop in downtown" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
