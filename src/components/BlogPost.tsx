
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  category: "cycling" | "tech";
}

const blogPosts: BlogPost[] = [
  {
    id: "discovering-hidden-trails",
    title: "Discovering Hidden Trails in Sydney's North Shore",
    date: "April 15, 2025",
    category: "cycling",
    content: "Last weekend, I explored some spectacular mountain biking trails connecting Ku-ring-gai Chase National Park to Garigal National Park. The technical single tracks and stunning harbor views made for an unforgettable ride. It was quite fun."
  },
  {
    id: "sunrise-ride",
    title: "Sunrise Ride Around Sydney Harbour",
    date: "April 10, 2025",
    category: "cycling",
    content: "There's something magical about cycling across the Harbour Bridge at dawn. Today's 30km loop took me through Kirribilli, Neutral Bay, and back through the CBD as the city was just waking up."
  },
  {
    id: "coastal-adventure",
    title: "Coastal Adventure: Bondi to La Perouse",
    date: "April 3, 2025",
    category: "cycling",
    content: "Completed the scenic Eastern Beaches coastal ride from Bondi to La Perouse. The route offers stunning ocean views, challenging climbs, and plenty of coffee stops along the way."
  },
  {
    id: "multi-cluster-management",
    title: "Multi-cluster Management with Meshery",
    date: "April 17, 2025",
    category: "tech",
    content: "Deep dive into how Meshery revolutionizes multi-cluster Kubernetes management and multi-cloud services configuration. Learn about unified control planes, seamless cluster registration, and centralized policy management across your entire cloud native infrastructure. The Kanvas Snapshot Helm Plugin allows users to generate a visual snapshot of their Helm charts directly from the command line. It simplifies the process of creating Meshery Snapshots, providing a visual representation of packaged Helm charts. This plugin integrates with Meshery Cloud and GitHub Actions to automate the workflow of snapshot creation, which is especially useful for Helm users who need to quickly visualize their chart configurations. Helm charts can be complex, especially when custom configurations are applied via values.yaml files. This Meshery extension bridges the gap between Helm chart configurations and their visual representation by converting Helm charts into Kanvas Snapshots. These snapshots can be received either via email or as a URL displayed directly in the terminal."
  },
  {
    id: "helm-kanvas-snapshot",
    title: "Introducing the Helm Kanvas Snapshot Plugin",
    date: "April 16, 2025",
    category: "tech",
    content: "Explore the powerful Helm Kanvas Snapshot plugin that enables versioning and rollback capabilities for your Kubernetes configurations. See how it simplifies configuration management and provides instant visualization of your cluster state changes."
  }
];

export const BlogPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Post not found</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 page-transition">
      <Button 
        variant="ghost" 
        className="mb-8" 
        onClick={() => navigate('/blog')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Button>
      
      <Card>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.date}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground whitespace-pre-wrap">{post.content}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export { blogPosts };
