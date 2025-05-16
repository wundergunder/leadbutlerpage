import React, { useEffect } from 'react';
import { DollarSign, Users, BarChart4, ArrowRight } from 'lucide-react';

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const Affiliate: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "High Commission Rates",
      description: "Earn up to 30% recurring commission for each successful referral that signs up for Lead Butler."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Lifetime Commissions",
      description: "Get paid for the entire duration your referral remains a customer, not just the first month."
    },
    {
      icon: <BarChart4 className="w-6 h-6" />,
      title: "Performance Dashboard",
      description: "Track your referrals, earnings, and performance metrics through our intuitive dashboard."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
            Partner Program
          </span>
          <h1 className="text-4xl font-bold text-slate-800 mb-6">
            Join Our Affiliate Program
          </h1>
          <p className="text-lg text-slate-600">
            Partner with Lead Butler and earn substantial recurring commissions by referring hotels, Airbnbs, and hostels to our AI-powered guest communication platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">
                Why Become an Affiliate?
              </h2>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <span className="text-slate-600">30% recurring commission on all referral revenue</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <span className="text-slate-600">Monthly payments with no minimum threshold</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <span className="text-slate-600">Dedicated affiliate support team</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <span className="text-slate-600">Marketing materials and resources provided</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <span className="text-slate-600">Real-time tracking and reporting</span>
                </li>
              </ul>
            </div>
            <div className="p-8 md:p-12 bg-slate-50">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Apply to Become an Affiliate</h3>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/bF0B7TtS8SMHkDXogmvx"
                style={{ width: '100%', height: '534px', border: 'none', borderRadius: '3px' }}
                id="inline-bF0B7TtS8SMHkDXogmvx" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Affiliate Onboarding"
                data-height="534"
                data-layout-iframe-id="inline-bF0B7TtS8SMHkDXogmvx"
                data-form-id="bF0B7TtS8SMHkDXogmvx"
                title="Affiliate Onboarding"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;