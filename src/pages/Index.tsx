
import { ArrowRight, Shield, Clock, Smartphone, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  const features = [
    {
      icon: Clock,
      title: '快速审批',
      description: '最快5分钟完成审批，资金快速到账'
    },
    {
      icon: Shield,
      title: '安全可靠',
      description: '银行级加密技术，保护您的个人信息安全'
    },
    {
      icon: Smartphone,
      title: '操作简便',
      description: '手机APP操作，随时随地申请贷款'
    }
  ];

  const steps = [
    {
      step: '01',
      title: '下载APP',
      description: '从应用商店下载KenyaCash应用'
    },
    {
      step: '02',
      title: '注册认证',
      description: '填写基本信息，完成身份认证'
    },
    {
      step: '03',
      title: '申请贷款',
      description: '选择贷款金额和期限，提交申请'
    },
    {
      step: '04',
      title: '快速放款',
      description: '审批通过后，资金快速到账'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                快速便捷的
                <span className="block text-primary-200">现金贷服务</span>
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed">
                专为肯尼亚用户打造的智能借贷平台，提供快速、安全、透明的现金贷服务。
                最快5分钟审批，24/7全天候服务。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary-700 hover:bg-primary-50 font-semibold px-8 py-3"
                >
                  立即下载APP
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-700 px-8 py-3"
                >
                  了解更多
                </Button>
              </div>
            </div>
            
            <div className="lg:text-center animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="w-72 h-72 bg-white rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-primary-800 mb-2">KenyaCash</h3>
                      <p className="text-primary-600">Your Financial Partner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              为什么选择KenyaCash？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们致力于为肯尼亚用户提供最优质的金融服务体验
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
              >
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                    <feature.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              如何申请贷款？
            </h2>
            <p className="text-xl text-gray-600">
              简单四步，轻松获得资金支持
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ArrowRight className="w-6 h-6 text-primary-300 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            准备好获得资金支持了吗？
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            立即下载KenyaCash APP，享受快速、安全的现金贷服务
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-3"
          >
            下载APP开始申请
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
