import { useStore } from "@nanostores/react"
import { mainStore } from "../lib/store"

export default function Modal() {

    const {modalOpen} = useStore(mainStore)

    return (
        <>
        {
            modalOpen && (
                <div className="w-full h-screen  top-0 left-0 z-20 flex flex-col items-start justify-start bg-base-100
                overflow-y-hidden
                fixed
                ">
                    <button onClick={() => mainStore.set({
                        ...mainStore.get(),
                        modalOpen: false
                    })}
                    className="btn btn-ghost btn-circle border absolute right-0 top-0 p-4">
                        <svg

                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="flex gap-3 items-center justify-center w-full h-full">
                    <nav className="w-full h-full  flex flex-col items-start justify-center p-4">

                        <a href="/">
                            <button className="btn btn-ghost">Home</button>
                        </a>
                        <a href="/blog">
                            <button className="btn btn-ghost">Blog</button>
                        </a>
                        <a href="/about">
                            <button className="btn btn-ghost">About</button>
                        </a>
                        </nav>
                        <div>
                        <form className="flex flex-col gap-1">
                            <input className="input  input-bordered" type="text" placeholder="search..." />
                            <button className="btn btn-sm glass">Search</button>
                        </form>
                        </div>
                    </div>
                </div>
            )
        }
        </>
    )
}