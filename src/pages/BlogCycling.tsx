
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { blogPosts } from "@/components/BlogPost";

const BlogCycling = () => {
  const cyclingPosts = blogPosts.filter(post => post.category === "cycling");

  return (
    <div className="container mx-auto px-4 py-16 page-transition">
      <h1 className="text-4xl font-bold mb-8">Cycling Adventures</h1>
      
      <div className="space-y-6">
        {cyclingPosts.map(post => (
          <Link key={post.id} to={`/blog/${post.id}`}>
            <Card className="hover:bg-muted/50 transition-colors">
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">{post.content}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCycling;
