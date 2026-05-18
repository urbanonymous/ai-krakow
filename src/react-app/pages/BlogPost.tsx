import { Link, useParams } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { getBlogPost } from "@/lib/blog-posts";

const BackToPostsLink = ({ className = "" }: { className?: string }) => (
  <Link to="/#blog" className={className}>
    Back to posts
  </Link>
);

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <PageLayout mainClassName="flex-grow pt-32 pb-20 bg-white">
        <div className="container-custom max-w-3xl">
          <p className="text-sm font-mono uppercase tracking-wider text-[#F97316] mb-4">
            Not Found
          </p>
          <h1 className="heading-lg mb-6">Post not found</h1>
          <BackToPostsLink className="braun-button-secondary inline-block" />
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout mainClassName="flex-grow pt-32 pb-20 bg-white">
      <article className="container-custom max-w-3xl">
        <BackToPostsLink className="inline-block text-sm font-mono uppercase tracking-wider text-[#F97316] hover:text-[#F97316]/80 mb-8" />

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-block px-3 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] text-sm font-medium">
            {post.category}
          </span>
          <time className="text-sm text-black/60" dateTime={post.dateTime}>
            {post.date}
          </time>
        </div>

        <h1 className="heading-xl text-black mb-8">{post.title}</h1>
        <p className="text-xl leading-relaxed text-black/70 mb-12">{post.summary}</p>

        <div className="space-y-6 text-lg leading-relaxed text-black/80">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogPost;
