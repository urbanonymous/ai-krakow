const posts = [
  {
    date: "May 14, 2026",
    category: "Field Notes",
    title: "What Krakow builders are doing with agents now",
    summary:
      "A quick look at practical agent workflows: research helpers, support triage, coding companions, and tiny automations that save real hours.",
  },
  {
    date: "May 7, 2026",
    category: "Builder Notes",
    title: "From demos to real debugging",
    summary:
      "The most useful AI prototypes are often unfinished. This note compares prompts, tool chains, deployment headaches, and the small UX choices that make AI features feel useful.",
  },
  {
    date: "Apr 30, 2026",
    category: "Guide",
    title: "How to bring a five-minute AI demo",
    summary:
      "Keep it honest, keep it small, and show the failure mode. A simple checklist for sharing something people can understand, question, and build on together.",
  },
  {
    date: "Apr 23, 2026",
    category: "Local Scene",
    title: "Where to prototype in Krakow",
    summary:
      "A short list of Krakow-friendly habits for keeping momentum: coworking mornings, cafe testing, async feedback loops, and pairing with someone outside your domain.",
  },
  {
    date: "Apr 16, 2026",
    category: "Ideas",
    title: "Small AI products beat vague AI platforms",
    summary:
      "Specific jobs, clear inputs, and visible outputs still win. Notes on why the strongest community demos solve one narrow problem before reaching for a bigger story.",
  },
  {
    date: "Apr 9, 2026",
    category: "Community",
    title: "The AI Krakow reading pile for spring",
    summary:
      "A practical reading list for builders: model evaluation, interface patterns, local-first tools, and a few essays that make the current AI moment easier to navigate.",
  },
];

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
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col min-h-[260px] hover:border-[#F97316]/50 transition-colors"
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#F97316]">
                  {post.category}
                </span>
                <time className="text-sm text-black/60" dateTime={new Date(post.date).toISOString()}>
                  {post.date}
                </time>
              </div>

              <h3 className="text-xl font-bold text-black mb-4 leading-tight">{post.title}</h3>
              <p className="text-black/70 leading-relaxed">{post.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
