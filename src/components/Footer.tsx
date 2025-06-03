
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-bold">KenyaCash</span>
            </div>
            <p className="text-primary-200 text-sm leading-relaxed">
              为肯尼亚用户提供快速、安全、便捷的现金贷服务，助力您的财务自由。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-200 hover:text-white transition-colors duration-200">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-primary-200 hover:text-white transition-colors duration-200">
                  关于我们
                </Link>
              </li>
              <li>
                <Link to="/document/privacy" className="text-primary-200 hover:text-white transition-colors duration-200">
                  隐私政策
                </Link>
              </li>
              <li>
                <Link to="/document/terms" className="text-primary-200 hover:text-white transition-colors duration-200">
                  服务条款
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">法律信息</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/document/license" className="text-primary-200 hover:text-white transition-colors duration-200">
                  营业执照
                </Link>
              </li>
              <li>
                <Link to="/document/compliance" className="text-primary-200 hover:text-white transition-colors duration-200">
                  合规声明
                </Link>
              </li>
              <li>
                <Link to="/document/risk" className="text-primary-200 hover:text-white transition-colors duration-200">
                  风险提示
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">联系我们</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-primary-200">+254 700 000 000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <span className="text-primary-200">info@kenyacash.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                <span className="text-primary-200">
                  Nairobi, Kenya<br />
                  CBD Business Center
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-300 text-sm">
              © {currentYear} KenyaCash. 保留所有权利。
            </p>
            <p className="text-primary-300 text-sm mt-2 md:mt-0">
              受肯尼亚金融监管局监管
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
