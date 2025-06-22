// This is the main homepage component rendered at the root route (/)
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-16">
      {/* A container centered on the page with a max width */}
      <div className="max-w-4xl mx-auto text-center">
        
        <h1 className="text-5xl font-bold mb-6">Jam Jars</h1>

        <p className="text-xl mb-8">
          Web Consultancy & Contracting — Building modern, reliable, scalable web applications.
        </p>

        <a
          href="#" // Scroll to a  section with id="#"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Get in Touch
        </a>
      </div>
    </main>
  );
}
