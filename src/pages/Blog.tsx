
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
                Last weekend, I explored some spectacular mountain biking trails connecting Ku-ring-gai Chase National Park to Garigal National Park. The technical single tracks and stunning harbor views made for an unforgettable ride.
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
