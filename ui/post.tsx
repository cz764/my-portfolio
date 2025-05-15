import Link from "next/link";

export default async function Post({ post }) {
  return <Link href={`/blog/${post.slug}`}>{post.title}</Link>;
}
