type ProjectPreviewType = {
  projectName: string;
  projectDate: Date;
  minutesToRead: string;
  author: string;
  description: string;
  tags: string[];
  slug: string;
};
export default function ProjectPreview({
  description,
  minutesToRead,
  projectDate,
  projectName,
  tags,
  author,
  slug,
}: ProjectPreviewType) {
  return (
    <a
      className="
      p-6 shadow-xl gap-2 flex flex-col hover:scale-110 transition-all
      max-w-[400px]
      h-[250px]
      "
      href={`/projects/${slug}`}
    >
      <h2 className="text-xl font-extrabold">{projectName}</h2>
      <div className="flex justify-between w-full">
        <div className="text-sm">{projectDate.toString()}</div>
        <div className="text-sm">{minutesToRead}</div>
      </div>
      <div className="whitespace-pre-wrap mx-auto line-clamp-5 my-2">
        {description}
      </div>
      <div className="flex gap-1 justify-end flex-wrap">
        {tags.map((tag) => {
          return (
            <div className=" hover:-translate-y-1 text-sm shadow-xl bg-gradient-to-br from-base-200 px-2 py-1 rounded-md cursor-pointer hover:scale-110 transition-all" key={tag}>
              {tag}
            </div>
          );
        })}
      </div>
    </a>
  );
}
