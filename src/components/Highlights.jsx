import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { rightImg, watchImg } from '../utils'
import VideoCarousel from "./VideoCarousel"
import { animateWithGsap } from "../utils/animations"

const Highlights = () => {

  useGSAP(() => {
    animateWithGsap('#title', { y: 0, opacity: 1 })
    animateWithGsap('.link', { 
      opacity: 1, 
      y: 0, 
      duration: 0.7,
      stagger: 0.25,
    })
  }, [])

  return (
    <section 
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="mb-12 -w-full items-end justify-between md:flex">
        <h1 id="title" className="section-heading !mb-0">Get the highlights.</h1>
        <div className="flex flex-wrap items-end gap-5">
          <p className="link">
            Watch the film
            <img src={watchImg} alt="watch" className="ml-2" />
          </p>
          <p className="link">
            Watch the event
            <img src={rightImg} alt="right" className="ml-2" />
          </p>
        </div>
      </div>
      <VideoCarousel />
    </section>
  )
}

export default Highlights