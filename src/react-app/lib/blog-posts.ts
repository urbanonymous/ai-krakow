export type BlogPost = {
  slug: string;
  date: string;
  dateTime: string;
  category: string;
  title: string;
  summary: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "krakow-builders-agents-now",
    date: "May 14, 2026",
    dateTime: "2026-05-14",
    category: "Field Notes",
    title: "What Krakow builders are doing with agents now",
    summary:
      "A quick look at practical agent workflows: research helpers, support triage, coding companions, and tiny automations that save real hours.",
    content: [
      "The most interesting agent work happening around Krakow is not loud or cinematic. It is small, practical, and usually attached to an existing workflow that was already painful.",
      "Research helpers are the easiest place to start. They gather references, compare sources, and prepare a first pass that a human can challenge. The win is not that the agent is always right. The win is that it gets a messy question into a shape that is easier to inspect.",
      "Support triage is another strong pattern. Teams can route repetitive questions, summarize customer context, and flag the cases that need judgment. The useful systems keep humans close to the decision and make uncertainty visible.",
      "For builders, coding companions are becoming less about autocomplete and more about keeping context alive: reading files, explaining tradeoffs, generating tests, and turning vague ideas into reviewable patches.",
      "The best tiny automations have one thing in common: they save real time without asking people to trust a black box. They show their work, leave room for correction, and fit inside tools people already use.",
    ],
  },
  {
    slug: "demos-to-real-debugging",
    date: "May 7, 2026",
    dateTime: "2026-05-07",
    category: "Builder Notes",
    title: "From demos to real debugging",
    summary:
      "The most useful AI prototypes are often unfinished. This note compares prompts, tool chains, deployment headaches, and the small UX choices that make AI features feel useful.",
    content: [
      "A polished demo can hide the most important part of an AI product: what happens when it is wrong, slow, uncertain, or asked to do something just outside its intended path.",
      "Useful debugging starts by treating prompts as interface design. A prompt is not only an instruction to a model. It is a contract between the product, the data, and the person relying on the output.",
      "Tool chains matter too. Retrieval, function calls, structured outputs, background jobs, and evaluation scripts all change what the user experiences. A small model with good context can beat a large model wrapped in vague instructions.",
      "Deployment is where many prototypes become honest. Latency, costs, observability, and failure handling decide whether an AI feature can become part of everyday work.",
      "The best AI UX choices are often quiet: confidence cues, source links, editable drafts, undo paths, and clear handoffs back to the human.",
    ],
  },
  {
    slug: "five-minute-ai-demo",
    date: "Apr 30, 2026",
    dateTime: "2026-04-30",
    category: "Guide",
    title: "How to bring a five-minute AI demo",
    summary:
      "Keep it honest, keep it small, and show the failure mode. A simple checklist for sharing something people can understand, question, and build on together.",
    content: [
      "A good five-minute AI demo does not need theatrical polish. It needs a clear problem, a visible input, a visible output, and one honest explanation of where the system breaks.",
      "Start with the job. What was slow, confusing, repetitive, or newly possible? If people understand the job, they can understand the demo even if the stack is unfamiliar.",
      "Keep the surface area small. Show one happy path and one edge case. The edge case is where the real conversation begins because it reveals what the system knows, assumes, and cannot handle.",
      "Name the ingredients: model, data source, tools, framework, and deployment path. You do not need to defend every choice, but context helps others adapt the idea.",
      "End with the next question. Should it be faster, safer, cheaper, more private, more useful, or simply easier to explain?",
    ],
  },
  {
    slug: "where-to-prototype-in-krakow",
    date: "Apr 23, 2026",
    dateTime: "2026-04-23",
    category: "Local Scene",
    title: "Where to prototype in Krakow",
    summary:
      "A short list of Krakow-friendly habits for keeping momentum: coworking mornings, cafe testing, async feedback loops, and pairing with someone outside your domain.",
    content: [
      "Krakow is a good city for quiet prototypes. It has enough technical density to find feedback and enough cafe-and-coworking rhythm to make small experiments feel natural.",
      "Coworking mornings work well for focused builds. Pick one narrow task, timebox it, and leave with something that can be shown to one other person.",
      "Cafe testing is underrated. If a product cannot be explained over a small table with a laptop and bad Wi-Fi, it may not be ready for a bigger launch story.",
      "Async feedback loops help keep momentum. A short screen recording, a clear question, and a link to try the prototype can produce better feedback than a long status update.",
      "Pairing outside your domain is especially useful for AI work. Designers catch unclear outputs, founders catch weak value propositions, and engineers catch fragile assumptions.",
    ],
  },
  {
    slug: "small-ai-products",
    date: "Apr 16, 2026",
    dateTime: "2026-04-16",
    category: "Ideas",
    title: "Small AI products beat vague AI platforms",
    summary:
      "Specific jobs, clear inputs, and visible outputs still win. Notes on why the strongest community demos solve one narrow problem before reaching for a bigger story.",
    content: [
      "The phrase 'AI platform' often arrives too early. Before there is a platform, there should be a job that someone cares about enough to repeat.",
      "Small AI products are easier to trust because their boundaries are visible. They take a clear input, do a specific thing, and return an output that can be judged.",
      "This does not make ambition smaller. It makes learning faster. A focused product teaches you what data matters, what users correct, what they ignore, and where automation actually helps.",
      "The strongest demos often feel almost boring on paper: summarize these invoices, draft these support replies, classify these leads, extract these risks. The magic is in fitting the workflow precisely.",
      "Once the narrow job works, the platform story can emerge from real usage instead of wishful architecture.",
    ],
  },
  {
    slug: "spring-reading-pile",
    date: "Apr 9, 2026",
    dateTime: "2026-04-09",
    category: "Community",
    title: "The AI Krakow reading pile for spring",
    summary:
      "A practical reading list for builders: model evaluation, interface patterns, local-first tools, and a few essays that make the current AI moment easier to navigate.",
    content: [
      "The best AI reading pile mixes technical depth with product judgment. Model capabilities change quickly, but the questions around usefulness, evaluation, and trust stay stubbornly relevant.",
      "Start with evaluation. Learn how people test task success, compare outputs, and notice regressions. Without evaluation, every prompt change feels like weather.",
      "Then look at interface patterns. Drafts, citations, structured outputs, tool permissions, and human review loops are where AI becomes legible to users.",
      "Local-first and privacy-aware tools deserve attention too. Not every workflow should send every piece of context to a remote service, especially when prototypes turn into operations.",
      "Finally, keep a few thoughtful essays nearby. The current AI moment is technical, but it is also cultural. Good writing helps separate durable ideas from the weekly fog.",
    ],
  },
];

export const getBlogPost = (slug: string) =>
  blogPosts.find((post) => post.slug === slug);
