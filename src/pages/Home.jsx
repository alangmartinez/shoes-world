import backgroud from "/assets/videos/hero-background.mp4";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section id="/" className="relative">
      <video
        src={backgroud}
        autoPlay
        muted
        loop
        className="w-screen h-screen object-cover shadow-xl"
      />
      <div className="absolute w-full h-full left-0 top-0">
        <div className="absolute top-50 left-50 translate-x-[15%] md:translate-x-[50%] translate-y-[20%] md:translate-y-[50%]">
          <h1 className="font-heading tracking-wide text-5xl md:text-8xl text-start font-extrabold text-shadow mb-60">
            Discover
            <br />a new part of you
            <br /> at
            <span className="uppercase text-white"> shoes world!</span>
          </h1>
          <button className="before:block before:border before:bg-white before:opacity-70 before:absolute before:-translate-y-5 lg:before:-translate-y-10 before:-translate-x-5  lg:before:-translate-x-10 before:h-[60px] lg:before:h-20 before:w-36 lg:before:w-60 before:-z-10 uppercase bg-black text-white p-2 md:p-4 px-8 md:px-16 font-body text-4xl md:text-5xl shadow-xl">
            <Link to="/shoes">Discover</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
