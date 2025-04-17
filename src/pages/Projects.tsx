
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
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Projects;
