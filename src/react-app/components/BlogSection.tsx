import { Link } from "react-router-dom";
import { blogPosts } from "@/lib/blog-posts";

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-secondary text-black relative z-10">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#F97316]/10 text-[#F97316] text-sm font-medium mb-4">
            Notes
          </span>
          <h2 className="heading-lg text-black mb-4">Latest Posts</h2>
          <p className="text-muted-foreground text-lg">
            Fresh updates, recaps, and working notes from the AI Krakow community.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.title}
              to={`/blog/${post.slug}`}
              className="group bg-white border border-gray-200 rounded-lg p-6 flex flex-col min-h-[260px] hover:border-[#F97316]/50 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#F97316]/40"
              aria-label={`Read ${post.title}`}
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#F97316]">
                  {post.category}
                </span>
                <time className="text-sm text-black/60" dateTime={post.dateTime}>
                  {post.date}
                </time>
              </div>

              <h3 className="text-xl font-bold text-black mb-4 leading-tight group-hover:text-[#F97316] transition-colors">
                {post.title}
              </h3>
              <p className="text-black/70 leading-relaxed mb-6">{post.summary}</p>
              <span className="mt-auto text-sm font-mono uppercase tracking-wider text-[#F97316]">
                Read article
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
