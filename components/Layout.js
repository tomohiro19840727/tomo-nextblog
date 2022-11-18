import Head from "next/head";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link";

const name = "K.TOMOHIRO";
export const siteTitle = "朋広のNEXT.js"

function layout({ children, home}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href='/favicon.ico'></link>
        <title>{ siteTitle }</title>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img src="/images/029REDN8UA_TP_V4.jpg" className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}/>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ): (
          <>
          <img src="/images/029REDN8UA_TP_V4.jpg" className={utilStyles.borderCircle} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>

      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default layout