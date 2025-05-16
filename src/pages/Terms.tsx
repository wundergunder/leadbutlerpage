import React from 'react';
import { ScrollText } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <ScrollText className="w-6 h-6 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-slate-800">Terms of Service</h1>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. Agreement to Terms</h2>
              <p className="text-slate-600 mb-4">
                By accessing or using Lead Butler's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. Use License</h2>
              <p className="text-slate-600 mb-4">
                Permission is granted to temporarily access and use Lead Butler's services for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-slate-600 mb-4">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Lead Butler at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. Service Terms</h2>
              <p className="text-slate-600 mb-4">
                Our services are provided "as is." We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. Limitations</h2>
              <p className="text-slate-600 mb-4">
                In no event shall Lead Butler or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. Subscription Terms</h2>
              <p className="text-slate-600 mb-4">
                Subscriptions are billed on a monthly basis. You may cancel your subscription at any time, but no refunds will be issued for partial months of service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">6. Modifications</h2>
              <p className="text-slate-600 mb-4">
                Lead Butler reserves the right to revise these terms of service at any time without notice. By using this service you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;