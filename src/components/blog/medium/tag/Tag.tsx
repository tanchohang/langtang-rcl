export interface TagProps {
  tag: string;
  link: string;
  backgroundColor: string;
  color: string;
}

const Tag = ({ tag, link, backgroundColor, color }: TagProps) => {
  return (
    <a
      className={
        'rounded-3xl p-1 text-xs md:text-sm font-extralight tracking-widest  cursor-pointer transition duration-500 hover:opacity-50'
      }
      href={link}
      style={{ backgroundColor }}
    >
      {tag}
    </a>
  );
};

export { Tag };
