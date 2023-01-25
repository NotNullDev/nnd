type SingleProjectPreviewProps = {
    imageUrl: string,
    title: string,
    description: string
    linkUrl: string
}

const SingleProjectPreview = ({description, imageUrl, title, linkUrl}: SingleProjectPreviewProps) => {
    return (
      <div className="bg-base-100 shadow-xl w-1/3 h-[400px]">
      <figure className="aspect-w-12 aspect-h-8">
        <img src={imageUrl} alt={title} />
        </figure>
      <div className="p-8 flex flex-col gap-3 h-[150px] ">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{description}</p>
        <div className="justify-end flex">
          <a href={linkUrl} target="blank" className="btn btn-primary">Visit</a>
        </div>
      </div>
    </div>
    )
}

export default SingleProjectPreview;