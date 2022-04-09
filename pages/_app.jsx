import '../styles/globals.scss'
import Layout from '../components/layout'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { useStore } from '../state-management/store'

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)
  let myScroll = 0
  useEffect(() => {
    const ele = document.getElementById('header')
    window.addEventListener('scroll', () => {
      if (window.scrollY > myScroll && window.scrollY >= ele.offsetHeight) {
        ele.style.transform = `translateY(-${ele.offsetHeight}px)`
        ele.style.boxShadow = 'none'
        myScroll = window.scrollY
      }
      if (window.scrollY < myScroll) {
        ele.style.transform = `translateY(0)`
        ele.style.boxShadow = '0 15px 30px -15px rgb(0 0 0 / 15%)'
        myScroll = window.scrollY
      }
    })
  }, [])

  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <link rel="icon" href="/logo.png" />
        </Head>
        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp