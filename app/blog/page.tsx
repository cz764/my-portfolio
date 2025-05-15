import Post from "@/ui/post";

export default async function Page() {
  const posts = [
    {
      id: 1,
      slug: "aaa",
      title: "jane",
    },
    {
      id: 2,
      slug: "bbb",
      title: "morning",
    },
  ];

  return (
    <ul className="list-disc">
      {posts.map((post) => (
        <li>
          <Post key={post.id} post={post} />
        </li>
      ))}
    </ul>
  );
}
