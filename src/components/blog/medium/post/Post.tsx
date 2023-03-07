type CreatorType = {
  name: string;
  imgUrl: string;
};

export interface PostProps {
  title: string;
  excerpt: string;
  imgUrl: string;
  tags: string[];
  created_at: Date;
  creator?: CreatorType;
  backgroundColor?: string;
}

const Post = ({
  title,
  excerpt,
  imgUrl,
  tags,
  created_at,
  creator,
  backgroundColor,
}: PostProps) => {
  return (
    <div
      style={{ backgroundColor }}
      className="w-[90vw] mx-auto text-xs md:text-base flex flex-col justify-center gap-3 overflow-x-hidden"
    >
      {creator && (
        <header className="flex gap-3">
          <img
            src={creator.imgUrl}
            className="rounded-full outline outline-slate-200 bg-slate-100 w-[15px] h-[15px] md:w-[30px] md:h-[30px] inline-block"
          />
          <span>{creator.name}</span>
          <span className=" font-light">{created_at.toDateString()}</span>
        </header>
      )}
      <main className="flex">
        <section className="flex flex-col gap-3">
          <div className="pr-2">
            <h2 className="text-xl md:text-3xl font-bold">{title}</h2>
            <article className="hidden md:block">{excerpt}</article>
          </div>

          <footer className="my-7 ">
            {tags.map((tag: string) => (
              <a
                className="rounded-3xl bg-gray-200 p-1 text-xs md:text-sm font-extralight tracking-widest hover:bg-gray-300 cursor-pointer transition-colors duration-500"
                href={'/tag/' + tag.replace(' ', '_')}
              >
                {tag}
              </a>
            ))}
          </footer>
        </section>
        <section className="">
          <img src={imgUrl} />
        </section>
      </main>
    </div>
  );
};

export { Post };
