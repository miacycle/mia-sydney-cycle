
const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-16 page-transition">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Meshery</h2>
          <p className="text-muted-foreground">
          As a self-service engineering platform, Meshery enables collaborative design and operation of cloud and cloud native infrastructure.
          </p>
        </div>
        
        <div className="bg-card p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Computer Vision Research - University of Sydney</h2>
          <p className="text-muted-foreground">
          Graduate research project focusing on advanced computer vision techniques for real-time object detection and classification in complex environments, conducted at the University of Sydney's School of Computer Science.
          </p>
        </div>
        
        <div className="bg-card p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Graphic Design & UX Impact Study</h2>
          <p className="text-muted-foreground">
          Comprehensive analysis of how graphic design principles influence user experience outcomes, examining the intersection of visual aesthetics and usability in digital interfaces.
          </p>
        </div>
        
        <div className="bg-card p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Visual Topology Rendering Performance</h2>
          <p className="text-muted-foreground">
          Research and development of high-performance algorithms for rendering complex visual topologies, focusing on optimization techniques for large-scale network visualization and interactive graph displays.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
