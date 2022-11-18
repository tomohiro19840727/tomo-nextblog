import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/Layout';
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from '../lib/post';

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
    <section className={utilStyles.headingMd}>
      <p>私は初心者エンジニアです!! コールセンターの仕事をしながら勉強しています。目標は自分で一つのWEBアプリを作成することです。</p>
    </section>

    <section>
      <h2>📝エンジニアのブログ</h2>
    </section>
    <div className={styles.grid}>
      {allPostsData.map(({ id, title, thumbnail, date }) => (
      <article key={id} >
        <Link href={`/posts/${id}`}>
         <img src={thumbnail}  className={styles.thumbnailImage} alt="" />
        </Link>
        <Link href={`/posts/${id}`} className={utilStyles.boldText}>
          {title}
        </Link>
        <br />
        <small className={utilStyles.lightText}>{date}</small>
      </article>
      ))}
    </div>
    </Layout>
      
  )
}
