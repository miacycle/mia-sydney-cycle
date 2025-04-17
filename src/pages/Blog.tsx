
const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-16 page-transition">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        <article className="bg-card p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Coming Soon</h2>
          <p className="text-muted-foreground">
            Blog posts about cloud native technologies, open source contributions, and cycling adventures in Sydney.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blog;
