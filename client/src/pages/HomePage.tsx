import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to Node.js App
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A modern full-stack application built with Node.js, Express, PostgreSQL, and React
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technologies We Use</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Node.js', description: 'JavaScript runtime built on Chrome\'s V8 engine' },
              { name: 'Express', description: 'Fast, unopinionated web framework for Node.js' },
              { name: 'PostgreSQL', description: 'Powerful, open source object-relational database' },
              { name: 'Prisma', description: 'Next-generation Node.js and TypeScript ORM' },
              { name: 'React', description: 'A JavaScript library for building user interfaces' },
              { name: 'TypeScript', description: 'Typed superset of JavaScript that compiles to plain JavaScript' },
            ].map((tech) => (
              <div key={tech.name} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">{tech.name}</h3>
                <p className="mt-2 text-base text-gray-500">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}