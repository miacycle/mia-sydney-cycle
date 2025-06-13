import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from 'react-markdown';

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
    content: "Explore the powerful [Helm Kanvas Snapshot plugin](https://meshery.io/extensions/helm-kanvas-snapshot) that enables versioning and rollback capabilities for your Kubernetes configurations. See how it simplifies configuration management and provides instant visualization of your cluster state changes."
  },
  {
    id: "visual-kubernetes-topology",
    title: "Ending Finger-pointing in Cloud Native Infrastructure Management with Layer5 Kanvas",
    date: "April 12, 2025",
    category: "tech",
    content: `Navigating the intricacies of cloud native infrastructure can often feel like solving a complex puzzle with multiple hands in the mix. Different teams, various tools, and constant updates can lead to confusion, miscommunication, and the dreaded "finger-pointing" when issues arise. Layer5 Kanvas is changing this narrative by fostering seamless collaboration between developers and operations teams.

**The Collaboration Gap in Cloud Native**

Traditional infrastructure management often involves siloed teams working with disconnected tools. This can lead to:

*   **Misunderstandings:** Different interpretations of infrastructure configurations.
*   **Delayed troubleshooting:** Difficulty in pinpointing issues due to a lack of shared context.
*   **Inefficient workflows:** Redundant tasks and communication overhead.

Layer5 Kanvas addresses these challenges head-on by providing a centralized, visual platform designed for collaborative infrastructure management.

**How Layer5 Kanvas Facilitates Collaboration**

1.  **Real-time Collaboration:** Like Google Workspace or Figma, Kanvas enables real-time collaboration on infrastructure designs. Multiple team members can work on the same diagram simultaneously, seeing each other's changes live. This eliminates confusion and ensures everyone is on the same page.
2.  **Visual Interface:** Kanvas provides a user-friendly, drag-and-drop interface for designing and visualizing cloud native infrastructure. This graphical representation makes it easy for developers, operators, and other stakeholders to understand the relationships between different components.
3.  **Centralized Platform:** Kanvas acts as a centralized platform for infrastructure design and management. This eliminates the need for disparate tools and provides a single source of truth for all infrastructure configurations.
4.  **Version Control:** Kanvas includes collaborative editing and version control features, allowing teams to track changes, revert to previous versions, and avoid conflicts.
5.  **Easy Identification:** The visual nature of Kanvas makes it easy to identify and understand complex infrastructure components, which simplifies troubleshooting and onboarding of new team members.
6.  **Design Patterns:** A catalog of ready-made blueprints for common infrastructure and application architectures is available, promoting best practices and streamlining the design process.
7.  **Kanvas Spaces:** Similar to Google Shared Drive, Kanvas Spaces provides a collaborative environment tailored for cloud-native infrastructure management.
8.  **Design Reviews:** Kanvas allows teams to collaboratively review and provide feedback on designs and prototypes.

**Benefits of Layer5 Kanvas**

By fostering collaboration, [Layer5 Kanvas](https://kanvas.new) offers numerous benefits:

*   **Reduced misunderstandings:** Shared visual context ensures everyone is aligned.
*   **Faster troubleshooting:** Easy identification and shared understanding of issues.
*   **Improved efficiency:** Streamlined workflows and reduced communication overhead.
*   **Enhanced teamwork:** Collaborative editing and version control promote teamwork.
*   **Better onboarding:** Visual representation simplifies understanding of complex infrastructure.

**Try Layer5 Kanvas Today**

Layer5 Kanvas is revolutionizing how teams manage cloud native infrastructure. By facilitating collaboration, it eliminates finger-pointing, improves efficiency, and empowers developers to work together more effectively.

Try dragging and dropping your Kubernetes manifest into [https://kanvas.new](https://kanvas.new) today and experience the future of collaborative infrastructure management.`
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

  const shareUrl = `${window.location.origin}/blog/${post.id}`;

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
          <Button
            variant="outline"
            className="mt-2"
            onClick={() => {
              navigator.clipboard.writeText(shareUrl);
            }}
          >
            Share Post
          </Button>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <ReactMarkdown 
              components={{
                a: ({ node, ...props }) => (
                  <a 
                    {...props} 
                    className="text-blue-600 hover:text-blue-800 underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  />
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { blogPosts };
