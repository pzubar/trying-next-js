import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hello, I am Petro and I am discovering the Next.js framework!</p>
          <p>Just now, I think it is really cool!</p>
        </section>
      </Layout>
  )
}
