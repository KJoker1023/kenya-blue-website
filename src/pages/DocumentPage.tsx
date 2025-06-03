
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { FileText, Calendar } from 'lucide-react';

const DocumentPage = () => {
  const { type } = useParams<{ type: string }>();
  const [searchParams] = useSearchParams();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');

  const documentConfigs = {
    privacy: {
      title: '隐私政策',
      lastUpdated: '2024年1月1日',
      content: `# 隐私政策

## 1. 信息收集

我们可能收集以下类型的个人信息：

### 1.1 个人身份信息
- 姓名
- 身份证号码
- 电话号码
- 电子邮件地址
- 银行账户信息

### 1.2 设备信息
- 设备型号和操作系统
- IP地址
- 应用程序使用数据

## 2. 信息使用

我们使用收集的信息用于：

- **身份验证**：确认您的身份和资格
- **风险评估**：评估贷款申请的风险
- **服务提供**：处理您的贷款申请和管理账户
- **客户支持**：提供技术支持和客户服务

## 3. 信息保护

我们采用以下措施保护您的个人信息：

- 使用行业标准的加密技术
- 实施严格的访问控制
- 定期进行安全审计
- 员工隐私培训

## 4. 信息共享

我们不会出售、交易或转让您的个人信息给第三方，除非：

1. 获得您的明确同意
2. 法律要求
3. 保护我们的合法权益

## 5. 您的权利

您有权：

- 访问您的个人信息
- 更正不准确的信息
- 删除您的个人信息
- 限制信息处理

## 6. Cookie使用

我们使用Cookie来：

- 记住您的偏好设置
- 分析网站使用情况
- 提供个性化体验

## 7. 联系我们

如果您对本隐私政策有任何疑问，请联系我们：

**邮箱**：privacy@kenyacash.com  
**电话**：+254 700 000 000  
**地址**：Nairobi, Kenya CBD Business Center`
    },
    terms: {
      title: '服务条款',
      lastUpdated: '2024年1月1日',
      content: `# 服务条款

## 1. 接受条款

通过使用KenyaCash应用程序和服务，您同意遵守本服务条款。

## 2. 服务描述

KenyaCash提供以下服务：

### 2.1 现金贷服务
- 短期个人贷款
- 快速审批和放款
- 灵活的还款选项

### 2.2 相关服务
- 客户支持
- 账户管理
- 金融教育资源

## 3. 申请条件

要使用我们的服务，您必须：

- 年满18周岁
- 是肯尼亚合法居民
- 拥有有效的身份证件
- 有稳定的收入来源

## 4. 贷款条款

### 4.1 贷款金额
- 最低：KSh 1,000
- 最高：KSh 50,000

### 4.2 贷款期限
- 最短：7天
- 最长：30天

### 4.3 利率和费用
- 日利率：0.1% - 0.5%
- 服务费：贷款金额的1-3%
- 无隐藏费用

## 5. 还款

### 5.1 还款方式
- M-Pesa
- 银行转账
- 其他指定支付方式

### 5.2 逾期处理
- 逾期费：每日0.1%
- 催收程序
- 信用记录影响

## 6. 用户责任

您同意：

- 提供真实准确的信息
- 按时偿还贷款
- 遵守相关法律法规
- 保护账户安全

## 7. 免责声明

KenyaCash不对以下情况承担责任：

- 系统维护导致的服务中断
- 不可抗力因素
- 第三方服务提供商的问题

## 8. 条款修改

我们保留随时修改本条款的权利，修改后的条款将在应用程序中公布。

## 9. 争议解决

任何争议将通过以下方式解决：

1. 友好协商
2. 调解
3. 肯尼亚法院诉讼

## 10. 联系信息

如有疑问，请联系：

**邮箱**：legal@kenyacash.com  
**电话**：+254 700 000 000`
    },
    license: {
      title: '营业执照',
      lastUpdated: '2024年1月1日',
      content: `# 营业执照信息

## 公司注册信息

**公司名称**：KenyaCash Financial Services Ltd.  
**注册号**：CPR/2020/123456  
**注册日期**：2020年3月15日  
**注册地址**：Nairobi, Kenya CBD Business Center

## 业务范围

根据肯尼亚公司法，本公司获准从事以下业务：

1. 小额信贷服务
2. 金融咨询服务
3. 数字支付服务
4. 信用评估服务

## 监管许可

### 金融服务许可
- **许可证号**：FSL/2020/001
- **发证机关**：肯尼亚中央银行
- **有效期**：2020-2025年

### 数据保护许可
- **许可证号**：DPR/2020/002
- **发证机关**：肯尼亚数据保护专员办公室
- **有效期**：2020-2025年

## 合规声明

本公司严格遵守以下法律法规：

- 肯尼亚银行法
- 小额信贷法
- 数据保护法
- 消费者保护法

## 审计信息

**审计机构**：KPMG Kenya  
**最近审计日期**：2023年12月31日  
**审计结果**：合规无重大违规

## 联系方式

**监管投诉热线**：+254 700 000 001  
**合规邮箱**：compliance@kenyacash.com`
    },
    compliance: {
      title: '合规声明',
      lastUpdated: '2024年1月1日',
      content: `# 合规声明

## 监管合规

KenyaCash严格遵守肯尼亚金融监管要求：

### 1. 中央银行监管
- 定期报告业务数据
- 接受监管检查
- 遵守资本充足率要求

### 2. 反洗钱合规
- 客户身份识别（KYC）
- 可疑交易报告
- 员工反洗钱培训

### 3. 数据保护合规
- 遵守GDPR和本地数据保护法
- 实施数据保护措施
- 定期数据保护培训

## 负责任放贷

我们承诺负责任的放贷实践：

- 评估借款人还款能力
- 提供透明的贷款条款
- 合理的催收实践
- 金融教育和咨询

## 消费者保护

- 公平透明的定价
- 清晰的合同条款
- 有效的投诉处理机制
- 保护客户隐私

## 持续改进

我们持续改进合规管理：

- 定期合规培训
- 内部审计
- 外部合规评估
- 政策更新

## 投诉渠道

**投诉邮箱**：complaints@kenyacash.com  
**投诉热线**：+254 700 000 002  
**监管投诉**：Central Bank of Kenya`
    },
    risk: {
      title: '风险提示',
      lastUpdated: '2024年1月1日',
      content: `# 风险提示

## 重要提醒

借贷涉及风险，请您在申请前仔细考虑。

## 主要风险

### 1. 利率风险
- 贷款产生利息费用
- 逾期将产生额外费用
- 影响您的财务状况

### 2. 信用风险
- 逾期还款影响信用记录
- 可能影响未来借贷能力
- 信用记录将被报告给征信机构

### 3. 财务风险
- 可能导致财务困难
- 影响日常生活开支
- 债务负担增加

## 负责任借贷建议

### 评估还款能力
- 计算您的月收入和支出
- 确保有足够的还款能力
- 考虑突发事件的影响

### 合理使用贷款
- 仅借取必需的金额
- 用于合法合理的用途
- 避免重复借贷

### 按时还款
- 设置还款提醒
- 确保账户有足够余额
- 如有困难及时联系我们

## 寻求帮助

如果您遇到还款困难：

1. **立即联系我们**
   - 客服热线：+254 700 000 000
   - 邮箱：support@kenyacash.com

2. **寻求专业建议**
   - 财务顾问咨询
   - 债务管理建议

3. **考虑其他选择**
   - 与家人朋友商讨
   - 寻求其他资金来源

## 免费金融教育

我们提供免费的金融教育资源：

- 预算管理技巧
- 储蓄建议
- 债务管理指导
- 理财规划

请记住：借贷是一项重要的财务决定，请根据您的实际情况谨慎选择。`
    }
  };

  useEffect(() => {
    if (type && documentConfigs[type as keyof typeof documentConfigs]) {
      const config = documentConfigs[type as keyof typeof documentConfigs];
      setTitle(config.title);
      setLastUpdated(config.lastUpdated);
      setContent(config.content);
    }
  }, [type]);

  if (!type || !documentConfigs[type as keyof typeof documentConfigs]) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-16 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900">文档未找到</h1>
          <p className="text-gray-600 mt-4">请检查URL是否正确</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Document Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-8 h-8 text-primary-600" />
              <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              <span>最后更新：{lastUpdated}</span>
            </div>
          </div>

          {/* Document Content */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-primary-200">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-600">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-gray-900">{children}</strong>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary-200 pl-4 italic text-gray-700 my-4">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                      {children}
                    </code>
                  )
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-primary-50 rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-primary-800 mb-3">
              需要帮助？
            </h3>
            <p className="text-primary-700 mb-4">
              如果您对本文档有任何疑问，请随时联系我们的客服团队。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:legal@kenyacash.com"
                className="text-primary-600 hover:text-primary-800 font-medium"
              >
                📧 legal@kenyacash.com
              </a>
              <a
                href="tel:+254700000000"
                className="text-primary-600 hover:text-primary-800 font-medium"
              >
                📞 +254 700 000 000
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DocumentPage;
