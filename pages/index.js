import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ball | Home</title>
        <meta name='keywords' content='balls'/>
      </Head>
      <div className={styles.title}>
        <h1 className={styles.text}>Hello World</h1>
        <Link href={"/ball"}>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}
