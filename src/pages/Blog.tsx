
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { blogPosts } from "@/components/BlogPost";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-16 page-transition">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <Tabs value="cycling" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="cycling">Cycling Adventures</TabsTrigger>
          <TabsTrigger value="tech">Tech & Open Source</TabsTrigger>
        </TabsList>
        
        <TabsContent value="cycling" className="space-y-6">
          {blogPosts
            .filter(post => post.category === "cycling")
            .map(post => (
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
        </TabsContent>

        <TabsContent defaultValue="tech" className="space-y-6">
          {blogPosts
            .filter(post => post.category === "tech")
            .map(post => (
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Blog;
