import React from 'react';
import { Shield } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <Shield className="w-6 h-6 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-slate-800">Privacy Policy</h1>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. Information We Collect</h2>
              <p className="text-slate-600 mb-4">
                We collect information that you provide directly to us, including name, email address, and any other information you choose to provide.
              </p>
              <p className="text-slate-600 mb-4">
                We automatically collect certain information about your device when you use our services, including IP address, web browser type, and operating system version.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. Use of Information</h2>
              <p className="text-slate-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions</li>
                <li>Send you technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new products and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. Data Storage and Security</h2>
              <p className="text-slate-600 mb-4">
                We use industry-standard security measures to protect your information. Your data is stored in secure cloud infrastructure with encryption at rest and in transit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. Cookies and Tracking</h2>
              <p className="text-slate-600 mb-4">
                We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. Data Retention</h2>
              <p className="text-slate-600 mb-4">
                We retain your information for as long as your account is active or as needed to provide you services. We will also retain and use your information as necessary to comply with our legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">6. Updates to Privacy Policy</h2>
              <p className="text-slate-600 mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;