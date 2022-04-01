import '../styles/globals.scss'
import Layout from '../components/layout'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { useEffect } from 'react'
import Router from "next/router"

function MyApp({ Component, pageProps, store, ...rest }) {
  let myScroll = 0
  useEffect(() => {
    const ele = document.getElementById('header')
    window.addEventListener('scroll', () => {
      if (window.scrollY > myScroll && window.scrollY >= ele.offsetHeight) {
        ele.style.transform = `translateY(-${ele.offsetHeight}px)`
        myScroll = window.scrollY
      }
      if (window.scrollY < myScroll) {
        ele.style.transform = `translateY(0)`
        myScroll = window.scrollY
      }
    })
    Router.events.on('routeChangeStart', () => {
      document.getElementById("nav").classList.remove('menu')
    })
    window.onresize = function () {
      document.getElementById("nav").classList.remove('menu')
    }
    window.onscroll = function () {
      document.getElementById("nav").classList.remove('menu')
    }
  },[])

  return (
      <Layout>
        <Head>
          <link rel="icon" href="/logo.png" />
        </Head>
        <NextNProgress />
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp