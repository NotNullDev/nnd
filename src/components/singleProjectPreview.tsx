type SingleProjectPreviewProps = {
    imageUrl: string,
    title: string,
    description: string
    linkUrl: string
}

const SingleProjectPreview = ({description, imageUrl, title, linkUrl}: SingleProjectPreviewProps) => {
    return (
<div className=" lg:card-side bg-base-100 shadow-xl w-[500px] h-[460px]">
  <figure className="h-[250px]"><img src={imageUrl} alt={title} width={400} height={300}/></figure>
  <div className="p-8 flex flex-col gap-3">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <a href={linkUrl} target="blank" className="btn btn-primary">Visit</a>
    </div>
  </div>
</div>
    )
}

export default SingleProjectPreview;