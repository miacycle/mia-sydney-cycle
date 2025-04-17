import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-16 page-transition">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      
      <Tabs defaultValue="cycling" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="cycling">Cycling Adventures</TabsTrigger>
          <TabsTrigger value="tech">Tech & Open Source</TabsTrigger>
        </TabsList>
        
        <TabsContent value="cycling" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Discovering Hidden Trails in Sydney's North Shore</CardTitle>
              <CardDescription>April 15, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Last weekend, I explored some spectacular mountain biking  trails connecting Ku-ring-gai Chase National Park to Garigal National Park. The technical single tracks and stunning harbor views made for an unforgettable ride. It was quite fun.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sunrise Ride Around Sydney Harbour</CardTitle>
              <CardDescription>April 10, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                There's something magical about cycling across the Harbour Bridge at dawn. Today's 30km loop took me through Kirribilli, Neutral Bay, and back through the CBD as the city was just waking up.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Coastal Adventure: Bondi to La Perouse</CardTitle>
              <CardDescription>April 3, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Completed the scenic Eastern Beaches coastal ride from Bondi to La Perouse. The route offers stunning ocean views, challenging climbs, and plenty of coffee stops along the way.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tech" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Multi-cluster Management with Meshery</CardTitle>
              <CardDescription>April 17, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Deep dive into how Meshery revolutionizes multi-cluster Kubernetes management and multi-cloud services configuration. Learn about unified control planes, seamless cluster registration, and centralized policy management across your entire cloud native infrastructure.
              </p>
              <p>The Kanvas Snapshot Helm Plugin allows users to generate a visual snapshot of their Helm charts directly from the command line. It simplifies the process of creating Meshery Snapshots, providing a visual representation of packaged Helm charts. This plugin integrates with Meshery Cloud and GitHub Actions to automate the workflow of snapshot creation, which is especially useful for Helm users who need to quickly visualize their chart configurations.

Helm charts can be complex, especially when custom configurations are applied via values.yaml files. This Meshery extension bridges the gap between Helm chart configurations and their visual representation by converting Helm charts into Kanvas Snapshots. These snapshots can be received either via email or as a URL displayed directly in the terminal.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Introducing the Helm Kanvas Snapshot Plugin</CardTitle>
              <CardDescription>April 16, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Explore the powerful Helm Kanvas Snapshot plugin that enables versioning and rollback capabilities for your Kubernetes configurations. See how it simplifies configuration management and provides instant visualization of your cluster state changes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>A Guide to Interpreting Meshery Designs</CardTitle>
              <CardDescription>April 14, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Master the art of reading and understanding Meshery Designs. From basic component relationships to complex service interactions, learn how to effectively interpret visual representations of your cloud native infrastructure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mastering Meshery Shapes and Edges</CardTitle>
              <CardDescription>April 12, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                An in-depth look at Meshery's visual language through its shapes and edges. Understanding component representations, connection types, and how they combine to create meaningful architectural diagrams for your cloud native applications.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revolutionizing Cloud Native UIs with Layer5 Kanvas</CardTitle>
              <CardDescription>April 16, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                As a maintainer of Meshery, I'm excited to share our progress on Kanvas - our new design system for cloud native applications. We're building a comprehensive component library that brings consistency and elegance to cloud native UIs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contributing to Layer5: A Journey in Open Source</CardTitle>
              <CardDescription>April 8, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Reflecting on my journey from first-time contributor to maintainer at Layer5. The welcoming community and mentorship opportunities have been instrumental in my growth as a developer.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Design Systems in Cloud Native Applications</CardTitle>
              <CardDescription>March 30, 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Exploring how Kanvas is addressing the unique challenges of building user interfaces for cloud native tools, from complex data visualization to real-time updates and state management.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Blog;
