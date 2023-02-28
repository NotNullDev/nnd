import { mainStore } from "../lib/store";

export default function Modal() {
    const modalOpen = mainStore(state => state.modalOpen);

    return (
        <>
        {
            modalOpen && (
                <div className="w-full h-screen  top-0 left-0 z-20 flex flex-col items-start justify-start bg-base-100
                overflow-y-hidden
                fixed
                ">
                    <button onClick={() => {
                        mainStore.setState(state => {
                            state.modalOpen = false;
                        })
                    }}
                    className="absolute top-0 right-0 m-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="hover:stroke-gray-500 active:scale-90" width="48" height="48" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                        <path d="M10 10l4 4m0 -4l-4 4"></path>
                    </svg>
                    </button>


                    <nav className="w-full h-full items-center flex flex-col justify-center p-4">
                        <a  href="/">
                            <button className="btn btn-ghost btn-lg">Home</button>
                        </a>
                        <a  href="/blog">
                            <button className="btn btn-ghost btn-lg">Blog</button>
                        </a>
                        <a  href="/about">
                            <button className="btn btn-ghost btn-lg">About</button>
                        </a>
                    </nav>

                </div>
            )
        }
        </>
    )
}