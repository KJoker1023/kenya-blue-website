
import { Users, Target, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const values = [
    {
      icon: Users,
      title: '客户至上',
      description: '始终将客户需求放在首位，提供贴心的金融服务'
    },
    {
      icon: Target,
      title: '专业可靠',
      description: '拥有专业的金融团队，确保服务质量和安全性'
    },
    {
      icon: Award,
      title: '诚信经营',
      description: '坚持诚信原则，建立长期可信赖的合作关系'
    },
    {
      icon: Globe,
      title: '创新发展',
      description: '持续创新金融科技，为用户带来更好的体验'
    }
  ];

  const team = [
    {
      name: 'David Kimani',
      position: '首席执行官',
      description: '拥有15年金融行业经验，曾任职于多家知名银行'
    },
    {
      name: 'Sarah Wanjiku',
      position: '技术总监',
      description: '计算机科学博士，专注于金融科技产品开发'
    },
    {
      name: 'Michael Ochieng',
      position: '风控总监',
      description: '风险管理专家，确保公司稳健经营'
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
              关于KenyaCash
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              我们是一家专注于为肯尼亚用户提供创新金融服务的科技公司，
              致力于通过技术创新让金融服务更加便民、安全、高效。
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
                我们的使命
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                KenyaCash成立于2020年，我们的使命是为肯尼亚人民提供便捷、透明、负责任的金融服务。
                我们相信每个人都应该有平等获得金融服务的机会，无论其背景如何。
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                通过先进的技术和深度的本地化理解，我们不断创新服务模式，
                帮助用户解决资金需求，实现财务目标。
              </p>
            </div>
            <div className="lg:text-center">
              <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-primary-800">让金融服务触手可及</h3>
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
              我们的价值观
            </h2>
            <p className="text-xl text-gray-600">
              指导我们前进的核心理念
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
              我们的团队
            </h2>
            <p className="text-xl text-gray-600">
              经验丰富的专业团队，为您提供优质服务
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
              <div className="text-primary-200">满意用户</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">KSh 2B+</div>
              <div className="text-primary-200">累计放款</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.8%</div>
              <div className="text-primary-200">系统稳定性</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5min</div>
              <div className="text-primary-200">平均审批时间</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
