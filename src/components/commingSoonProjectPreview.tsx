import FancyText from "./FancyText";

type SingleProjectPreviewProps = {
    imageUrl: string,
    title: string,
    description: string
}

const CommingSoonProjectPreview = ({description, imageUrl, title}: SingleProjectPreviewProps) => {
    return (
      <div className="flex flex-col bg-base-100 shadow-xl w-[350px] h-[420px] hover:scale-105 hover:shadow-indigo-600 transition-all duration-200 group rounded-xl relative">
      <figure className="aspect-w-12 aspect-h-8 rounded-xl">
        <img src={imageUrl} alt={title} className="rounded-xl" />
        </figure>
      <div className="p-8 flex flex-col gap-3  flex-1">
        <h2 className="text-xl font-bold flex">{title}</h2>
        <p className="flex-1 flex ">{description}</p>
        <div className="justify-end flex absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 ">
            <FancyText text="Comming soon" className="-rotate-45 text-7xl text-center opacity-60" />
        </div>
      </div>
    </div>
    )
}

export default CommingSoonProjectPreview;