import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import Router from "next/router"
import MainSlider from "../components/slider"

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    Router.events.on('routeChangeStart', () => {
      removeMenu()
    })
    window.onresize = function () {
      removeMenu()
    }
    window.onscroll = function () {
      removeMenu()
    }
  }, [])

  function removeMenu() {
    document.getElementById("nav").classList.remove('menu')
    dispatch({ type: 'BAR' })
  }

  return <div className="index-page">
    <MainSlider />
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
