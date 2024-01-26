const blogPostsData = [
  {
    heading: "Hvordan du tilsutter dit domain",
    date: "05/08/2024",
    image: "/flyout.jpg",
  },
  {
    heading: "Hvordan du tilsutter dit domain",
    date: "05/08/2024",
    image: "/flyout.jpg",
  },
  {
    heading: "Hvordan du tilsutter dit domain",
    date: "05/08/2024",
    image: "/flyout.jpg",
  },
];

export default function BlogPosts() {
  return (
    <section className="py-[60px] w-full border-b-[1px]">
      <div className="w-[90%] mx-auto max-w-main grid grid-cols-3 gap-[30px]">
        {blogPostsData.map((v) => (
          <BlogPostCard Obj={v} />
        ))}
      </div>
    </section>
  );
}

const BlogPostCard = (props: any) => {
  return (
    <div>
      <img className="rounded-[8px] mb-[20px]" src={props.Obj.image}></img>
      <p className="text-gray-600">{props.Obj.date}</p>
      <h1 className="text-main font-[600] text-[20px]">{props.Obj.heading}</h1>
    </div>
  );
};
