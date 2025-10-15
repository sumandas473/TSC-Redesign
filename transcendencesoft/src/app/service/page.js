import { MainLayout } from "../../components/layout/main-layout";

export default function Service() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive software solutions to help your business grow and succeed in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Custom websites and web applications built with modern technologies and best practices.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• React & Next.js Development</li>
                <li>• Node.js Backend Services</li>
                <li>• Database Design & Integration</li>
                <li>• API Development</li>
              </ul>
            </div>

            {/* Mobile Development */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Development</h3>
              <p className="text-gray-600 mb-6">
                Native and cross-platform mobile applications for iOS and Android devices.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• React Native Development</li>
                <li>• Flutter Applications</li>
                <li>• iOS & Android Native</li>
                <li>• App Store Deployment</li>
              </ul>
            </div>

            {/* UI/UX Design */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
              <p className="text-gray-600 mb-6">
                Beautiful and intuitive user interfaces that provide exceptional user experiences.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• User Interface Design</li>
                <li>• User Experience Research</li>
                <li>• Prototyping & Wireframing</li>
                <li>• Design Systems</li>
              </ul>
            </div>

            {/* Cloud Solutions */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 mb-6">
                Scalable cloud infrastructure and deployment solutions for modern applications.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• AWS & Azure Deployment</li>
                <li>• Docker & Kubernetes</li>
                <li>• CI/CD Pipeline Setup</li>
                <li>• Serverless Architecture</li>
              </ul>
            </div>

            {/* Consulting */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tech Consulting</h3>
              <p className="text-gray-600 mb-6">
                Strategic technology consulting to help you make informed decisions about your digital transformation.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Technology Strategy</li>
                <li>• Digital Transformation</li>
                <li>• Architecture Review</li>
                <li>• Performance Optimization</li>
              </ul>
            </div>

            {/* Maintenance & Support */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75 9.75 9.75 0 019.75-9.75z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Maintenance & Support</h3>
              <p className="text-gray-600 mb-6">
                Ongoing maintenance and support services to keep your applications running smoothly.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• 24/7 Technical Support</li>
                <li>• Regular Updates & Patches</li>
                <li>• Performance Monitoring</li>
                <li>• Security Audits</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
