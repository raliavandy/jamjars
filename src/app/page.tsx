import { BoltIcon, ClockIcon, ChartBarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { JSX } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-50 flex flex-col justify-center items-center px-6 py-24 text-gray-900 font-sans">
      {/* Hero */}
      <section className="max-w-3xl text-center space-y-6 animate-fadeIn">
        <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
          JamJars
        </h1>
        <p className="text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
          Seal your next big idea
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-xl hover:scale-105 hover:brightness-110 transition-transform duration-300"
        >
          Start Your Project
          <ArrowRightIcon className="w-5 h-5" />
        </a>
      </section>

      {/* Features */}
      <section className="mt-24 max-w-5xl w-full grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
        <FeatureCard
          icon={<BoltIcon className="w-10 h-10 mx-auto text-indigo-600" />}
          title="Modern Tech"
          description="Cutting-edge frameworks and tools for top performance."
        />
        <FeatureCard
          icon={<ClockIcon className="w-10 h-10 mx-auto text-indigo-600" />}
          title="Reliable Delivery"
          description="On-time delivery with highest quality standards."
        />
        <FeatureCard
          icon={<ChartBarIcon className="w-10 h-10 mx-auto text-indigo-600" />}
          title="Scalable Solutions"
          description="JamJars grows with you — built to last and expand."
        />
      </section>

      {/* Footer */}
      <footer className="mt-28 text-sm text-gray-500 text-center">
        &copy; {new Date().getFullYear()} JamJars | Freshly Sealed Creativity™
      </footer>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100">
      {icon}
      <h3 className="mt-4 font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
