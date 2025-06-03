
import { Users, Target, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'Always putting customer needs first, providing caring financial services'
    },
    {
      icon: Target,
      title: 'Professional & Reliable',
      description: 'Professional financial team ensuring service quality and security'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Adhering to integrity principles, building long-term trustworthy relationships'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Continuously innovating fintech to bring better user experiences'
    }
  ];

  const team = [
    {
      name: 'David Kimani',
      position: 'Chief Executive Officer',
      description: '15 years of experience in the financial industry, formerly with several renowned banks'
    },
    {
      name: 'Sarah Wanjiku',
      position: 'Chief Technology Officer',
      description: 'PhD in Computer Science, specializing in fintech product development'
    },
    {
      name: 'Michael Ochieng',
      position: 'Chief Risk Officer',
      description: 'Risk management expert ensuring stable company operations'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold">
              About Sulu Cash
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              We are a technology company focused on providing innovative financial services for Kenyan users,
              committed to making financial services more accessible, secure, and efficient through technological innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2020, Sulu Cash's mission is to provide convenient, transparent, and responsible 
                financial services to the people of Kenya. We believe everyone should have equal access to 
                financial services, regardless of their background.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through advanced technology and deep local understanding, we continuously innovate our service model
                to help users solve their financial needs and achieve their financial goals.
              </p>
            </div>
            <div className="lg:text-center">
              <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary-800">Making Financial Services Accessible</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              Core principles that guide our progress
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professional team providing you with quality service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-medium">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-primary-200">Satisfied Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">KSh 2B+</div>
              <div className="text-primary-200">Total Loans Disbursed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <div className="text-primary-200">System Uptime</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5min</div>
              <div className="text-primary-200">Average Approval Time</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
