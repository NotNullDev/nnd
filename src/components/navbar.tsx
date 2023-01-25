import { useEffect } from "react";
import toast from "react-hot-toast";
import { mainStore } from "../lib/store";

export default function Navbar() {

  useEffect(() => {
    window.onerror = (evt,src,l,c,e) => {
      console.log("error",evt,src,l,c,e);
    }
  }, [])

  return (
    <>
      <header
        className="sticky top-0 left-0 z-10 bg-base-100
        md:flex
        md:items-center
        px-12
        py-5
        container
        "
      >
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sky-500 text-3xl italic">PAGE IS UNDER DEVELOPMENT</div> */}
        <div className="flex  justify-between w-full container mx-auto items-center">
        <div className="flex items-center justify-between w-full gap-2 p-2 md:justify-start">
         <button className="btn btn-square btn-ghost md:hidden" onClick={() => {
              mainStore.setState(state=> {
                state.modalOpen = !state.modalOpen;
              })
              toast('toggled!')
            }}>
         <svg
            id="btn-toggle-wide"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 md:hidden"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            ></path>
          </svg>
         </button>
          <div className="hover:backdrop-brightness-125 rounded-xl cursor-pointer">
            <a
              href="/"
              className="btn btn-ghost text-xl font-bold italic bg-gradient-to-br from-indigo-600 to-orange-500 bg-clip-text text-opacity-0 text-transparent"
              style={{
                // some weird bug on chrome
                WebkitBackgroundClip: "text",
                // @ts-ignore
                "-webkit-background-clip": "text",
                "-webkit-text-fill-color": "transparent"
              }}
            >
              NotNullDev
            </a>
          </div>
          <a href="https://github.com/NotNullDev/nnd"
            className="cursor-pointer hover:scale-125 hover:invert transition-all duration-500 grid items-center mr-3 md:hidden"
          target="_blank">
          <svg
            width="2em"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
            </g>
          </svg>
          </a>
        </div>

        <nav
          id="nav-wide"
          className="gap-1 hidden
            md:flex
          "
        >
          <a className="btn btn-ghost" href="/">
            Home
          </a>
          <a className="btn btn-ghost" href="/blog">
            Blog
          </a>
          <a className="btn btn-ghost" href="/about">
            About
          </a>
          <a href="https://github.com/NotNullDev/nnd"
          className="cursor-pointer hover:scale-125 hover:invert transition-all duration-500 grid items-center md:hidden"
          target="_blank">
          <svg
            width="2em"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z"></path>
            </g>
          </svg>
          </a>
        </nav>
        </div>
      </header>
    </>
  );
}
