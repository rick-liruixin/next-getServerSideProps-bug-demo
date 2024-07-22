import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Header } from "@/components/header";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>home</h1>
      <Header />
    </div>
  );
};

export default Home;
