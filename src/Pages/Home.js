import React, { useRef, useEffect } from "react";

import gsap from "gsap";
import { personalDetails } from "../Details";
var canvas = document.createElement("canvas");
var gl;
var debugInfo;
var vendor;
var renderer;

try {
  gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
} catch (e) {}

if (gl) {
  debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
  vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
  renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
}
let gpu = renderer;

function Home() {
 

  if (gpu === "Mali-G31") {
    window.location.href = "https://nfc.ohfeel.me/html/";
  }

  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        {/* <img
          ref={myimageref}
          className="w-1/2 md:ml-auto"
          src={img}
          alt="OhFeel"
        /> */}
        <a href="https://discord.com/users/755136326977847439/">
          <img
            ref={myimageref}
            src="https://lanyard-profile-readme.vercel.app/api/755136326977847439"
            alt="Discord"
            className="w-80 md:ml-auto"
          />
        </a>
       
      </div>
    </main>
  );
}

export default Home;
