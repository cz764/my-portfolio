import Hero from "@/ui/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <section id="projects" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <p className="text-center text-gray-600">Coming soon...</p>
        </div>
      </section>
      
      <footer className="py-8 px-8 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 Chen Zhu. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
