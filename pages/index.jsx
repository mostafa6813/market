import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import Router from "next/router"

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      document.getElementById("nav").classList.remove('menu')
      dispatch({ type: 'BAR' })
    })
    window.onresize = function () {
      document.getElementById("nav").classList.remove('menu')
      dispatch({ type: 'BAR' })
    }
    window.onscroll = function () {
      document.getElementById("nav").classList.remove('menu')
      dispatch({ type: 'BAR' }) 
    }
  }, [])

  return <div className="index-page">
    <h1>Home page</h1>
    <h1>Home page</h1>
    <h1>Home page</h1>
    <h1>Home page</h1>
    <h1>Home page</h1>
    <h1>Home page</h1>
    <h1>Home page</h1>
    <h1>Home page</h1>
    <h1>Home page</h1>
    <h1>Home page</h1>
    <h1>Home page</h1>
    <h1>Home page</h1>
    <h1>Home page</h1>
    <h1>Home page</h1>
    <h1>Home page</h1>
    <h1>Home page</h1>
    <h1>Home page</h1>
    <h1>Home page</h1>
  </div>
}
