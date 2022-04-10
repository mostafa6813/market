import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import Router from "next/router"
import MainSlider from "../components/main-slider"
import Category from "../components/category"
import Bestselling from "../components/Bestselling"

export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    Router.events.on('routeChangeComplete',()=>{
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
    <Category/>
    <Bestselling/>
  </div>
}
