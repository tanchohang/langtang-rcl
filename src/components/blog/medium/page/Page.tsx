type CreatorType = {
  name: string;
  imgUrl: string;
};

export interface PageProps {
  title: string;
  body: string;
  imgUrl: string;
  tags: string[];
  created_at: Date;
  creator?: CreatorType;
  backgroundColor?: string;
  twoPageLayout?: boolean;
}

const Page = ({
  title,
  body,
  imgUrl,
  tags,
  created_at,
  creator,
  backgroundColor,
  twoPageLayout,
}: PageProps) => {
  return (
    <div>
      <header className="flex gap-3 items-center">
        <img
          src={creator?.imgUrl}
          className="rounded-full outline outline-slate-200 bg-slate-100 w-[15px] h-[15px] md:w-[30px] md:h-[30px] inline-block"
        />
        <div className=" flex flex-col text-sm">
          <span>{creator?.name}</span>
          <span className="font-light">{created_at.toDateString()}</span>
        </div>
      </header>
      <main>
        <h1 className="text-3xl">{title}</h1>
        <img src={imgUrl} className="" />
        <article>{body}</article>
      </main>
      <footer></footer>
    </div>
  );
};
export { Page };
