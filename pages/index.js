import style from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import axios from "axios";

export default function Home({ pizzaList }) {
  return (
    <div className={style.container}>
      <Head>
        <title>Pizza Restaurant in New york</title>
        <meta name="description" content="Best pizza shop in downtown" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
