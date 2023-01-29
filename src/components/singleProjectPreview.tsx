type SingleProjectPreviewProps = {
    imageUrl: string,
    title: string,
    description: string
    linkUrl: string
}

const SingleProjectPreview = ({description, imageUrl, title, linkUrl}: SingleProjectPreviewProps) => {
    return (
      <div className="flex flex-col bg-base-100 shadow-xl w-[350px] h-[420px] hover:scale-105 hover:shadow-indigo-600 transition-all duration-200 group rounded-xl">
      <figure className="aspect-w-12 aspect-h-8 rounded-xl">
        <img src={imageUrl} alt={title} className="rounded-xl" />
        </figure>
      <div className="p-8 flex flex-col gap-3  flex-1">
        <h2 className="text-xl font-bold flex">{title}</h2>
        <p className="flex-1 flex ">{description}</p>
        <div className="justify-end flex">
          <a href={linkUrl} target="blank" className="btn btn-primary group-hover:animate-pulse group-hover:animate-bounce">Visit</a>
        </div>
      </div>
    </div>
    )
}

export default SingleProjectPreview;